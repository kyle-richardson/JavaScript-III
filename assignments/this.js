/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - global scope, this scope is the window
* 2. implicit binding - object calling a function directly using dot, object itself is "this"
* 3. new binding - in constructor functions, "this" refers to the object itself, when it is called to create a new object.
* 4. explicit binding - similar to new binding, but can change "this" by using functions ".call" or ".apply" to explicitly change the pointer.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding

const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Kyle' };
  const you = { name: 'Everett' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  me.sayName();
  you.sayName();

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const lauren = new CordialPerson('Lauren');
  const virginia = new CordialPerson('Virginia');
  
  lauren.speak();
  virginia.speak();

// Principle 4

// code example for Explicit Binding

lauren.speak.call(virginia); 
virginia.speak.apply(lauren);

