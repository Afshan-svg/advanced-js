// we will change the universal value of pi
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,
    apple: function print() {
        console.log("Apple");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
    //     value: 'Ginger Chai',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    //   } making our property not changeable
    
    // Object.defineProperty(chai, "name", {
    //     writable: false,
    //     enumerable: false,
    // })
    // console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// iterate through objects in such a way
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
// objects and in window objects are usually asked in interviews

    