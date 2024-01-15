"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        console.log(`Hello Meddkit, ${this.greeting}!`);
    }
}
const greeter = new Greeter('My name is Bolorshagai');
greeter.greet();
