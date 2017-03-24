'using strict'
class Info{
    constructor(name){
        this.name = name;
    }
    printGreeting (){
        console.log(`Hello! I'm ${this.name}!`);
    }
}

class List extends Info{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`Hello! I'm ${this.name}, and I'm ${this.age} year old!`);
    }
}

var first = new Info('Cherry');
first.printGreeting();

var second = new List('Alice','21');
second.printGreeting();