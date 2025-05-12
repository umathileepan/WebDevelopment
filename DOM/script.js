var num = [];
var count = 1;

function fizzBuzz(){
    num.push(count);
    
    if(count % 3 === 0 && count % 5 == 0){
        num.push("FizzBuzz");
    }else if(count % 3 === 0){
        num.push("Fizz");
    }else if(count % 5 == 0){
        num.push("Buzz");
    }
    count++;
    console.log(num);
}
 