// Prototype is usually asked in interviews 
// JS doesnt stop when it cant find anything in fact it asks for its parents, grandparents and let know the value
// prototype ke andar prototype

function multipleBy5(num) {
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// Conclusion is that string, arrays, function all are objects in javascript and finally prototype of object is null

function createUser (username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++
}
createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai", 25) // the new keyword is necessary to write and can be asked in interviews
const tea = createUser("tea", 250)

chai.printMe()

// notes on new keyword:--------