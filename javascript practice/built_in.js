console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

var Mymath = {
    PI:Math.PI, 
    random: function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI", Mymath.PI);
console.log("MyMath.random()", Mymath.random());
console.log("MyMath.floor(3.9)", Mymath.floor(3.9));

