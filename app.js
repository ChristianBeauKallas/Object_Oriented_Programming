// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets; 
        this.residence = residence;
        this.hobbies = hobbies; 
    }
    addHobby(hobby){
        hobbies.push(hobby);
    }
    removeHobby(hobby) {
        this.hobbies.splice(this.hobbies.indexOf(hobby),1);
    }
    greeting() {
        console.log("Hello fellow person!")
    }
}

// Exercise 2 Section
class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting(){
        console.log("Do you even code, bro?")
    }
}

// Exercise 3 Section
const Beau = new Person ("Beau", 3, "Las Vegas", ["working out", "reading", "meditating"])
console.log(Beau);

Beau.greeting();

const Christian = new Coder ("Christian", 4, "Las Vegas", ["gaming", "coding"])
console.log(Christian);

Christian.greeting();

// Exercise 4 Section
class Calculator {
    constructor(result = 0){
        this.result = result;
    }
    add(a, b) {
        return this.result = a + b;
    }
    subtract (a,b){
        this.result = a - b;
    }
    multiply (a,b){
        this.result = a * b;
    }
    divide (a,b){
        this.result = a / b;
    }
    displayResult(){
        console.log(this.result)
    }
}
const calculator = new Calculator (7);
calculator.displayResult();
calculator.add(3,5);
calculator.displayResult();
