function sum(a, b){
    var sum = a + b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
}

function sum() {
    var sum = 0;
    for(var i = 0; i<arguments.length; i++){ //arguments가 뭐죠 그래서?
        sum += arguments[i];
    } //반환값을 함수 선언 시 설정할 필요가 없음. 반환이 필요하면 return 문만 적어주면 됨.
    return sum;
}

function mySum(){
    var result = sum(2,4,5,6,7,3);
}