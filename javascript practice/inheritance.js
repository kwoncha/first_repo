var superObj = {superVal:'super'}
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
// var subObj = {subVal:'sub'}
// subObj.__proto__=superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

var kim = {
    name: 'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}
// var lee={
//     name:'lee',
//     first:10, second:10,
//     avg: function(){
//         return (this.first+this.second)/2;
//     }
// }
lee.__proto__=kim;
console.log('lee.avg(): ', lee.avg());
console.log('lee.sum(): ', lee.sum());
