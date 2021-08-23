//inheritence and polymorphism example

class Person{
constructor(nameArg, ageArg){

    //data
    this.fullNames = nameArg;
    this.age = ageArg;
}

//operations
describe(){
    console.log('I am a 24 years old person');
}
}

class Man extends Person{
    constructor(nameArg, ageArg, tribeArg){
        super(nameArg, ageArg);
        this.tribe = tribeArg
    }
    describe(){
        console.log('I am a Ugandan');
    }
}

class Woman extends Person{
    constructor(nameArg, ageArg, tribeArg, heightArg){
        super(nameArg, ageArg);
        this.tribe = tribeArg
        this.height = heightArg 
    }
    describe(){
        console.log('Beautiful woman');
    }
}


let person = new Person('Marvin Kay', '24')
console.log(person.fullNames);
person.describe();
 
let man = new Man('Conrad', '35', 'Itesot')
console.log(man.tribe);
man.describe();

let woman = new Woman('Whitney', '15', 'Mukiga', '6.5ft')
console.log(woman.height);
woman.describe();



