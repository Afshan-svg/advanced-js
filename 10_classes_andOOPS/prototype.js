// we can do using trim.length
// Motive is to write an object which will remove empty spaces from a string
// but we wanna create a new function

const myHeros = ["Thor", "Spiderman"]
const heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling",
    
    getSpiderPower: function()  {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.afshan = function() {
    console.log("Afshan is present in all objects");
}
heroPower.afshan()
myHeros.afshan()
// since object is present everywhere we can access afshan as a globally defined prototype now
// Now lets check if we inject the prototype in arrays will the object access the prototype

Array.prototype.heyAfshan = function() {
    console.log(`Afshan says hello`);
}

myHeros.heyAfshan()
// heroPower.heyAfshan() we cant access the prototype of array in object but vice versa is possible 

// Let's learn about prototypal inheritance 

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
} 

const teachingAssistant = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS Assignments',
    fullTime: true,
    __proto__: teachingAssistant
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(teachingAssistant, Teacher)

// Motive is to write an object which will remove empty spaces from a string
// we can do using trim.length
// but we wanna create a new function

let anotherUsername = "ChaiAurCode"

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`True length of ${this} is ${this.trim().length}`);
}

anotherUsername.truelength()
"afshan".truelength()
"iceTea".truelength()
