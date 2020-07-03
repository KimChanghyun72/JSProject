
function fun1(){
    document.getElementById("show").innerHTML = "Hello";
}
//fun1();

var fun2 = function(str){
    // document.getElementById("show").innerHTML = str;
}
fun2("Hello"); //변수에 함수를 넣어서 사용하는 건 js에서만 가능.


function outerFunc(func){
    func(2,3,4,5,6);
}

function argsFunc(){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){ //arguments=>매개값으로 들어온 전체 선택.
        sum += arguments[i];
    }
    //document.getElementById("show").innerHTML = sum;
    return sum;
}
console.log(argsFunc(2,3,4,5,6));
outerFunc(function argsFunc(2,3,4,5,6){
    var sum = 0;
    for(var i=0; i<arguments.length; i++){ //arguments=>매개값으로 들어온 전체 선택.
        sum += arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
});
