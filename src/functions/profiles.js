var faker = require('faker');



var users =[]
var responses = []
for(var i=0; i<10;i++){
    var info = faker.fake("{{name.findName}}/{{internet.email}}").split("/");
    var newUser = {}
    newUser.name = info[0];
    newUser.email = info[1];
    users.push(newUser)
}

for(i=0; i<3;i++){
    var event = faker.fake("{{date.future}}/{{random.words}}").split("/")
    // eslint-disable-next-line
    users.forEach((user)=> {
        var copy = JSON.parse(JSON.stringify(user));
        copy.attendance = faker.random.boolean()
        copy.date = event[0]
        copy.summary = event[1]
        responses.push(copy)
    })
}

var emails = {}
users.forEach(user => {
    emails[user["email"]] = []
})
var obj = {
    responses,
    emails
}
console.log(users)
console.log(emails)

export default obj