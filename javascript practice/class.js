class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }
    avg(){
        return (this.first+this.second)/2;
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
        console.log('constructor');
    }
    avg(){
        return super.avg()+this.third/2;
    }
    sum(){
        return 'property : ' +(this.first+this.second+this.third);
    }
}

// var kim = new Person('kim' , 10, 10);
// console.log('kim',kim);

// k.sum = function(){
//     return 'this : ' +(this.first+this.second)
// }

var kim = new PersonPlus('kim', 10, 30, 40);
console.log("kim.sum", kim.sum());
console.log("kim.avg", kim.avg());
