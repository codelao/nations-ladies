const functions = require('firebase-functions');
const {google} = require('googleapis');
const calendar = google.calendar('v3');
const drive = google.drive('v3');
var calendarID = "1ug2ef6efto1ijsclv30cllqic@group.calendar.google.com"
const app = require('express')()
const cors = require('cors');
const shortid = require('shortid')
const apiUrl = "https://www.googleapis.com/calendar/v3/calendars/nations-ladies@gmail.com/events/watch"
var path = require('path');
const {
    client_id,
    client_secret,
    redirect_uris
} = {
    "client_id": "571565851553-hf3nirtq8hbij5atct8to5i4p15mhpha.apps.googleusercontent.com",
    "project_id": "nations-ladies",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://www.googleapis.com/oauth2/v3/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "lcnCVk_bda7vgDgh2yIWvGgO",
    "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
}
const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
)
var token = {
    "access_token": "ya29.GlsmBu72aeNyMlK1XN1Rb4a_cEQ8Kw7XGMo7da8aWZB_5OQn1itKUsdeKjV6TqKzorZh4VkP1D-N0ik_neUbQtpK2YJSh432P2d_KmD5Oja4xwqIgTO2QV3r_kvG",
    "refresh_token": "1/pjXGCVPzJAS6DN7aSGhSZcEEXiiWI41FRnErcsTq5GY",
    "scope": "https://www.googleapis.com/auth/calendar",
    "token_type": "Bearer",
    "expiry_date": 1538178884016
}
var CircularJSON = require('circular-json');


oauth2Client.setCredentials(token)
app.use(cors({ origin: true }));

app.get('/events', (req,res)=> {
    calendar.events.list({auth: oauth2Client,
        calendarId: calendarID}, (err, resp) => {
            if(err) console.log('evs', err)
            console.log(resp.data.items)
            res.end(JSON.stringify({data: resp.data.items}))
        })
})
app.post('/updatemeeting', (req, res)=> {
    calendar.events.list({auth: oauth2Client,
        calendarId: calendarID}, (err, resp) => {
            if(err) console.log('evs', err)
            console.log(resp.data.items)
            var body = resp.data.items.filter((item)=> {
                return item.id === req.body.ID
            })
            body[0]["summary"] = "new"
            body[0]["attendees"].forEach((obj, i)=> {
                if(obj.email === localStorage.getItem('email')){
                    body[0]["attendees"][i] = req.body.response
                }
            })
            console.log(body)
            calendar.events.update({
                auth:oauth2Client,
                calendarId: calendarID,
                eventId: req.body.ID,
                resource: CircularJSON.parse(CircularJSON.stringify(body[0]))
            }, (err, respo) => {
                if(err) console.log(err)
                 res.end(CircularJSON.stringify({data: respo.data}))
            })
    })
})

app.post('/addmeeting', (req, res) => {
    var _id = shortid.generate()
    const {
        description,
        summary,
        start,
        end,
        isReach, 
        location, 
        email
    } = req.body;
    var xstart = start
    var xend = end
    console.log(req.body)
    calendar.events.insert({
        auth: oauth2Client,
        calendarId: calendarID,
        sendUpdates:'all',
        resource: {
            description: description,
            summary: summary,
            end: {
            "dateTime": xend
            },
            start: {
            "dateTime":xstart
            },
           attendees:[{email:'sethlaolu@gmail.com'}, {email:'princessdami@gmail.com'}],
           extendedProperties:{
               "shared":{isReach:isReach, email:email}
           },
           location: location
        }
    }, (err, resp) => {
        console.log(err)
        res.end()
    })
})



app.post('/watch', (req, res)=> {
    calendar.events.watch({
        auth: oauth2Client,
        resource: {
            "id":"12346",
            "type": "web_hook",
            "address": "https://us-central1-nations-ladies.cloudfunctions.net/myCalendar/notification"
        },
        calendarId: calendarID
    }, (err, resp) => {
        if(err) console.log(err)
        res.end(JSON.stringify(resp))
    })
})

app.get('/xxx', (req, res)=> {
    res.sendFile(path.join(__dirname, '/google7482907aa35ac247.html'));
})

exports.myCalendar = functions.https.onRequest(app)

exports.getCalendarEvents = functions.https.onRequest((req, res)=> {
    return calendar.events.list({auth: oauth2Client,
        calendarId: calendarID}, (err, res) => {
            if(err) console.log('evs', err)
            console.log(res.data.items)
            return{data: res.data.items}
        })
})

exports.addCalendarEvent = functions.https.onCall((data, context)=> {
    const text = data.text;
    const uid = context.auth.uid;
    const name = context.auth.token.name || null;
    const picture = context.auth.token.picture || null;
    const email = context.auth.token.email || null;
})