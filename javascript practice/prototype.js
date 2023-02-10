function Person(name, first, second, third){
    this.name = name,
    this.first=first,
    this.second=second,
    this.third=third;
}

Person.prototype.sum = function(){
    return 'prototype : ' +(this.first+this.second+this.third);
}

var k = new Person('kim', 10, 10, 30);
k.sum = function(){
    return 'this : ' +(this.first+this.second)
}
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum", k.sum());
console.log("lee.sum", lee.sum());


console.log('Person()', Person());
