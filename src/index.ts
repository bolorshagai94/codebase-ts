class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    console.log(`Hello Meddkit, ${this.greeting}!`);
  }
}

const greeter = new Greeter('My name is Bolorshagai');
greeter.greet();

// How to run 
// use command line or terminal
// 1. tsc
// 2. node src/index