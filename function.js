// //Function Declare 
// function userInterface(){
//     console.log("Hi There! How was your day");
//     console.log("Is everything al right today!")
// }
// //Call the function 
// userInterface();

// function fanOffKor(){
//     console.log("Off ki hoise!");
//     console.log("Off na hoile taratari off kor bhai");
// }
//  fanOffKor();

// function paramchek(num){
//     console.log("Check the number: ",num*num);
// }

// paramchek(2);
// function abc(n1,n2){
//     diff= n2 - n1;
//     console.log("The difference: ", diff);

// }
// const a= 20;
// const b = 30;

// abc(a,b);

// function tentimes(n){
//     num = n * 10;
    
    
// }
// b = tentimes(2);
// console.log(b)


// function add(p1,p2){
//     const total = p1 + p2;
//     return total;
// }
//  const bill = add(5,10);
 
//  function add2(p1,p2){
//     return p1 + p2;
//  }
//  const bill2 = add(5,10);
 
//  console.log(bill,bill2)

// function doMath(n1,n2){
//     const s = n1 + n2;
//     const d = n1 - n2; 
//     const m = s * d; 
//     const r = m / 2; 
//     return r;
// }
// const abc = doMath(20,10);
// console.log(abc);

//Note: Str Parameter 

// function evenSizeString(str){
//     const size = str.length;
//     console.log(str,size);
// }
// evenSizeString("Dhaka");
// evenSizeString("Thakurgaon");


// function DorT(number,doDouble){
//     if(doDouble=== true){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number * 3;
//         return result;
//     }
// }
// console.log(DorT(5,true));
// console.log(DorT(5,false));

// function sumOfNumbers(numbers){
//     const len = numbers.length;
//     return len;
// }

// console.log(sumOfNumbers([12,14,1,2,33,12341,5]));
// //Here we use 3rd bracet in function call


// function sumOfNumbers(numbers){
//     let sum = 0;
//     for (const number of numbers){
//         // console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }

// const numbers = [1,2,3,4,5,6,7];
// const sum = sumOfNumbers(numbers)
// console.log(sum)


// function numberOfEven(numbers){
//     let even = [];
//     for (const number of numbers){
//         if(number % 2 === 0){
//             even.push(number);
//         }
//     }
//     return even;
// }
// const numbers = [1,2,3,4,5,6,7]
// const even = numberOfEven(numbers)
// console.log(even); 


// function evenNumber(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         if (number % 2 === 0){
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const numbers = [1,2,3,4,5,6,7];
// const abc = evenNumber(numbers);
// console.log(abc);