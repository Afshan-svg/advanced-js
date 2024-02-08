const user = {
    username: "Afshan Khan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Taken details from the database");
        console.log(`username: ${this.username}`);
        console.log(this)
        // this monday i.e refers to the current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //this for browser gives window objects

// constructor

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }
    // optional
    return this
}

const userOne = new User("Afshan", 8, true)
const userTwo = new User("ChaiCode", 8, true) // overwrites userone so we use new keyword to avoid such mess
console.log(userOne.greeting());
console.log(userOne);
console.log(userTwo);
