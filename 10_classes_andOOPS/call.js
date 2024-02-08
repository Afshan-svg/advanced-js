// We have a call stack in javascript
// global execution context and all the other functions are called in call stack
// when we have function in a function it also has its execution context
// this on window refers to all window objects
// this on node refers to an empty object this is usually asked in interviews 
// this and call in javascript:-
function setUserName (username) {
    // after advance DB calls we run below code say for example of discord
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username) // this and call is important as 
    // by not writing call the execution context goes off with all its values 
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "123")
console.log(chai); //createUser { email: 'chai@fb.com', password: '123' }
