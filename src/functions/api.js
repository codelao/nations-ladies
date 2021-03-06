import history from "../components/history"
import React from "react"
import ReactDOM from "react-dom";
var firebase = require("firebase");
var moment = require('moment');
var api = {}
var CircularJSON = require('circular-json');
var shortID = require('shortid').generate;


var users = ['sethlaolu@gmail.com','princessdami@gmail.com', "ayekod@gmail.com", "info@nationsladies.org.uk", "renee.a.sterling@gmail.com",
"adobea.atsrefi@gmail.com", "pammaugile@gmail.com", "info@nationsladies.org.uk", "dmburwell@gmail.com"]
const calendarUrl = 'https://us-central1-nations-ladies.cloudfunctions.net/myCalendar/';
const adminEmail = ['sethlaolu@gmail.com', 'princessdami@gmail.com', "dmburwell@gmail.com"]
var config = {
    apiKey: "AIzaSyCaLP-xSucfV-BCCPHx2s00wbrXT64Az1w",
    authDomain: "nations-ladies.firebaseapp.com",
    databaseURL: "https://nations-ladies.firebaseio.com",
    projectId: "nations-ladies",
    storageBucket: "nations-ladies.appspot.com",
    messagingSenderId: "571565851553",
};
var fire = firebase.initializeApp(config);
let database = firebase.database();

const auth = fire.auth()
var db = fire.firestore();
db.settings({
    timestampsInSnapshots: true
});

const returnUnverifiedUser = (email) => {
     const userIsVerified = users.some(userEmail => userEmail === email)
     if(!userIsVerified){
        history.push('/')
        return
     }
}

auth.onAuthStateChanged(user => {
    if(user){
        returnUnverifiedUser(user.email)
        localStorage.setItem('display', user.displayName);
        localStorage.setItem('email', user.email);
        if(localStorage.getItem('logged') === null){
            localStorage.setItem('logged', 'true')
            if(adminEmail.some(email => email === user.email)){
                localStorage.setItem('isAdmin', 'yes')
            }
            history.push('/mentorhome')
            window.location.reload(true)
        }
        console.log('logged in')
    }else{
        localStorage.removeItem('logged')
        localStorage.removeItem('display');
        localStorage.removeItem('email');
        localStorage.removeItem('isAdmin');
        console.log('logged out')
    }
})

var minutes = db.collection("minutes")

api.writeUserDataInDatabase = () => {
    
}

api.login = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar.events');
        provider.setCustomParameters({
            prompt: 'select_account'
          });
        history.push('/loading')
        return auth.signInWithRedirect(provider)
            .then((result)=> {    
            console.log(result)
            }).catch(console.log);
}

api.logout = () => {
    localStorage.setItem('logged', false)
    auth.signOut()
}

api.checkLogin = () => {
    return localStorage.getItem('logged')
}

api.writeEventData = (event) => {
    var {date} = event
    var xsummary = event.summary
    var xdescription = event.description
    var xstart = moment(date, "ddd MMM DD HH:mm:ss Z")
                    .format("YYYY-MM-DDTHH:mm:ss+0100")
    var xend = moment(xstart).add(1, 'h')
                    .format("YYYY-MM-DDTHH:mm:ss+0100")
    const xmentor = firebase.auth().currentUser.mentor
    let isReach = event.reach
    let email = localStorage.getItem('email')
    console.log('reach', isReach)
    console.log('ev', event)
    return fetch(calendarUrl + 'addmeeting', {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: CircularJSON.stringify({"end":xend, 
                                      "start":xstart, 
                                      "summary":xsummary, 
                                      "description":xdescription, 
                                      "mentor":xmentor,
                                      "isReach":isReach,
                                    "location":event.location,
                                "email":email})
    }).catch(console.log)
}


api.getEvents = () => {
    return fetch(calendarUrl + 'events')
        .then((res) => {
            return res.json()
        })  
        .catch(console.log)
}

api.uploadMinutes = (files, event)=> {
    var name = files[0].name;
    let ID = shortID()
    var metadata = {
        metaID: ID,
        name:name
    }
    var newRef = firebase.storage().ref().child(name)
    console.log('metadat', metadata);
    database.ref('files/' + ID).set({
        metadata:metadata
    })
    newRef.put(files[0], metadata).then((res)=> {
        console.log('file uploaded')
    }).catch(console.log)
}

let ref = firebase.storage().ref()

api.getAllFileNames = () => {
    return database.ref('files').once('value').then(snapshot => {
        console.log('val', Object.values(snapshot.val()).map(value => value.metadata.name))
        localStorage.setItem('filenames', JSON.stringify(Object.values(snapshot.val()).map(value => value.metadata.name)))
        let childKeys = Object.values(snapshot.val()).map(value => value.metadata.name)
        return childKeys.map((key, index) => {
            return ref.child(key).getDownloadURL()
            .then(url => {
                if(index > 0){
                    let previouslyStoredUrls = localStorage.getItem('url');
                    url = previouslyStoredUrls + '///' + url
                }
                localStorage.setItem("url", url)
            })
        })
    })
}


api.update = (data) => {
    return fetch(calendarUrl + 'updatemeeting', {
        method: 'post',
        headers: {'Content-Type':'application/json'}, 
        body: CircularJSON.stringify({response:data})
    })
}

export default api