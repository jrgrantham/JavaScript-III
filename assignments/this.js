/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - refers to the global object
* 2. Implicit binging - refers to the local object
* 3. New binding - links a keyword to a value (constructor)
* 4. Explicit binding - invocate and assign a value or copy
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var globalObject = this;
var upperVariable = 'Logged by window binding';
console.log(window.upperVariable);

// Principle 2

// code example for Implicit Binding
let bindingObject = {
    useThis: 'I am implicitly bound',
    example: function () {
        return this.useThis;
    }
}
console.log(bindingObject.example())

// Principle 3

// code example for New Binding
function CreateObject(name) {
    this.name = name;
}
let object = new CreateObject('assigned with a new binding');
console.log(object.name);

// Principle 4

// code example for Explicit Binding
