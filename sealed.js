function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype.say);
}
// @sealed
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    Greeter.prototype.say = function () { };
    return Greeter;
}());
Greeter.prototype.greet = function () {
    return "hhghhhh";
};
Greeter.prototype.say = function () {
    return 1222;
};
console.log(new Greeter("123").say());
