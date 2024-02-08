// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
    encryptPassword() {
        return `${this.password}abc`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// Behind the scene 

function User1(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User1.prototype.encryptPassword1 = function () {
    return `${this.password}****`
}
User1.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User1("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword1())
console.log(tea.changeUsername())
