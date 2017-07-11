//console.log('App working: open app/index.js to start exploring ES6');
//Learning about SUPER

class Greet {
    constructor(name){
        this.name = name;
    }

    sayHello(){
        return `Hello ${this.name}`;
    }

    sayGoodbye(){
        return `I am the dark... I am the night... I am ${this.name}!`;
    }
}

class BetterGreeting extends Greet{
    constructor(name, lName){
        super(name);
        this.lastName = lName;
    }

    alertHello(){
        alert(`What UP, ${this.name}! ${this.lastName}`);
    }
}

const batman = new Greet('Batman');
const joker = new Greet('Joker');

console.log(batman.sayHello());
console.log(batman.sayGoodbye());
console.log(joker.sayHello());
console.log(joker.sayGoodbye());

const flash = new BetterGreeting('Flash', 'The fastest man alive!');
console.log(flash.sayGoodbye());
flash.alertHello();
