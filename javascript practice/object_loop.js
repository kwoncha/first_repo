var memberArray= ['egoing', 'graphi', 'lee']
console.group('array loop');
var i = 0;
while(i< memberArray.length){
    console.log(i, memberArray[i])
    i = i + 1;
}
console.groupEnd('array loop');
var memberObject = {
    manager : 'egoing',
    developer : 'graphi',
    designer: 'lee'
}
console.log("memberObjact['designer']", memberObjact['designer']);
console.group('object loop');
for(var manager in memberObject){
    console.log(name,memberObject[name]);
}
console.groupEnd('object loop');