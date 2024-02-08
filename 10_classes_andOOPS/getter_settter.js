// Used to hide values from the user 

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        return `*****` // if not _ both constructor and getter will access the password and we will get an error
    }
    set password(value) {
        this._password = value // no need to return in setter
    }
    get email() {
        return `${this._email.toUpperCase()}` // if not _ both constructor and getter will access the password and we will get an error
    }
    set email(value) {
        this._email = value // no need to return in setter
    }
}

const afshan = new User ("a@afshan.ai", "abc")
console.log(afshan.password) 


console.log(afshan.email)