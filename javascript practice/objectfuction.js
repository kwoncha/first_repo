var kim = {name: 'kim', first:10, second:20}
var lee = {name: 'lee', first:10, second:30}
//'=>'인자는 prefix의 인자로 들어가 kim => 30으로 나타나게됨
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum(); = sum.call(kim); 두개가 서로 같은거임
console.log("sum.call(kim)", sum.call(kim, '=> '));
console.log("sum.call(lee)", sum.call(lee, ': '));
// this를 뭘로 쓸지 bind가 지정해버림
var kimsum = sum.bind(kim, '->');
console.log('kimsum()', kimsum());
