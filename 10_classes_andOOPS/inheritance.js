class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // earlier we used to use call and this to access parameters of other functions but with OOPS no need of such
        this.email = email
        this.password = password
    }
        addCourse() {
            console.log(`A new course was added by ${this.username}`);
        }
    }

const chai = new Teacher ("chai", "chai@gmail.com", "123")
chai.addCourse() // no need to add console log as method already has log
chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(masalaChai instanceof Teacher);