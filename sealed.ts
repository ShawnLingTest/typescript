
function sealed (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype.say);
}


// @sealed
class Greeter {
  greeting: string;
  constructor (message: string) {
    this.greeting = message;
  }

  greet () {
    return "Hello" + this.greeting;
  }

  say () {}
}


Greeter.prototype.greet = function () {
  return "hhghhhh"
}

Greeter.prototype.say = function () {
  return 1222;
}


console.log(new Greeter("123").say())