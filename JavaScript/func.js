        var num;
        document.write(typeof num + "<br>"); //undefined
        num  = 10;
        document.write(typeof num + "<br>"); //number
        num = "nice";
        document.write(typeof num + "<br>"); //string
        num = {
            name:"Hong",
            age:10
        }
        document.write(typeof num + "<br>"); //object

        
        var num1, num2, num3; //사용 아래에 선언해도 허용된다. 
        //하지만 대개 변수 선언을 맨 윗쪽에 해주고 사용하는 관례를 따르는 게 읽기 편할 듯.
        num1 = "Hello";
        num2 = 15;
        num3 = 30;
        num = num1 + num2 + num3; //num1 + (num2 + num3);
        console.log(num);
        
        num3 = "15";
        console.log(num2 == num3); // ==는 값만을 비교함. <-> !=
        console.log(num2 === num3); //===는 타입과 값을 함께 비교함. <-> !==

        var sum = 0;
        for(var i=0; i<10; i++){
            if(i<5)
                continue; // continue 아래의 내용을 실행하지 않고 반복문의 다음 phase로 넘어감.
                // break는 속한 반복문을 바로 종료시키고 벗어나는 구문.
            sum = sum + i; // == sum += i;
        }
        console.log("결과값은 : " + sum);

        var $sum = 10; //변수 선언 시, 처음에 오는 특수문자는 엄격히 제한된다.
        var _sum = 10; //그냥 변수 처음은 영어로 하는게 제일 낫다.
        var sum1 = null;
        var num1 = 10;
