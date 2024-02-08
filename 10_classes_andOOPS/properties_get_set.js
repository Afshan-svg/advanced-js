function User  (email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function() {
            return `****`
        },
        set: function(value) {
            this.password = value
        }
    })
}

const chai = new User("chai@google.com", "chai")
console.log(chai.email);