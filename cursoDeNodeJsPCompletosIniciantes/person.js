class Person {
    constructor (name){
        this.name = name;

    }

    sayMyName() {
        return `hello, my name is ${this.name}, I'm a programmer`;
        
    }
};

module.exports = {
    Person,
};
