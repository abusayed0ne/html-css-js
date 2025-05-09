console.log(10+4); //addition
console.log(10-4); //substraction 
console.log(10*4); //multiplication
console.log(10/4); //division
console.log(10%4); //modulus


let result = 5+2*3;
console.log(result)

let correct = (5+2)*3;
console.log(correct)

let total = 1000;
let discount = 10;
let finalprice = total - (total *discount/100);
console.log(finalprice);

//Avg Sum 
let a = 10; b= 20; c=30;
let avg = (a + b + c)/3;
console.log(avg)

// comparison 
let age = 18;
if (age >= 18){
    console.log("Eligible for Vote")
}

// celcius to farenheight
// C= (F-32)*5/9
let cel = 30;
let fr = c*9/5 + 32;
console.log(fr)

//Simple Calculator project 
let ab = 20;
let ba = 21; 
let operator = '/'; //can change this 

if(operator === '+') 
    console.log(ab + ba);
else if(operator === '-')
    console.log(ab-ba);
else if(operator === '*')
    console.log(ab*ba)
else if(operator === '/')
    console.log(ab/ba)
else console.log(ab%ba);


// Shopping cart with Discount 
let abc = 100;
let def = 200;
let ijk = 300;

let intotal = abc + def + ijk;
let vat = intotal*5/100;
let discountt = intotal*10/100;

let payment = intotal + vat - discountt;
console.log(payment)