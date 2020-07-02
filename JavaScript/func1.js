
function sum() {
    console.log("sum()호출..");
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){ //arguments가 뭐죠 그래서?
        sum += arguments[i];
    } //반환값을 함수 선언 시 설정할 필요가 없음. 반환이 필요하면 return 문만 적어주면 됨.
    return sum;
}
function sum(a, b){
    console.log("sum(a,b)호출")
    var sum = a + b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
}
//sum(a,b)가 가장 위에 있을 땐 호출이 안됐는데 내리니까 호출된다. 어떤 순서대로 오는거지?

function mySum(){
    var result = sum(2,4); //매개로 사용한 변수의 갯수에 상관없이 argument가 다 받아서 메소드 수행.
    console.log("결과: " + result);
}

function arraySum(ary) {
    var sum = 0;
    for(ar of ary){
        sum += ar;
    }
    return sum;
}

function arrayTest(){
    var numAry = [3,4,5,6,7];
    var result = arraySum(numAry);
    console.log(result);
}
function funcTest(){    //실행함수를 매개로 한 함수를 안에 담고있는 새로운 함수 설정은 실행이 되는데
    funcTest1(helloFunc1); //왜 함수로 싸지 않고서는 실행이 안되는거지?
} //매개값 문제인가?
function funcTest1(){
    var hello = document.getElementById("show").innerHTML;
    hello += " World";
    document.getElementById("show").innerHTML = hello;
}
function helloFunc1(){
    document.getElementById("show").innerHTML = "Hello";
}



function funcTest2() {
    var hello = document.getElementById("show").innerHTML;
    //console.log(helloFunc)
    hello += " World";
    document.getElementById("show").innerHTML = hello;
}

function helloFunc2() {
    document.getElementById("show").innerHTML = "Hello";
}