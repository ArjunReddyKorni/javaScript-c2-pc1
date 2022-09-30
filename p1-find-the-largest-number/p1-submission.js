let number1 = 30;
let number2 = 50;
let number3 = 45;

let max =0;

// Using nested-if
if(number1>max){
    max = number1;
}
if(number2 > max){
    max = number2;
}else
{
    max = number3;
}



console.log(`Largest Number is ${max}`);

// Using ternary operator
max = (number1>number2)?(number1>number3?number1:number3):(number2>number3?number2:number3);

 

console.log(`Largest Number is ${max}`);