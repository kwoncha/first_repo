function Person(name, first, second, third){
    this.name = name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}
var k = new Person('kim', 10, 10, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum", k.sum());
console.log("lee.sum", lee.sum());

var d1 = new Date('2023-2-06');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

console.log('Date', Date);

console.log('Person()', Person());
