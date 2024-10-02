const numbers = [1,2,3,4,5,6,7];
// console.log(numbers);
numbers.reverse(); // array will reverse 
// console.log(numbers);
const abc = numbers.reverse(); // main array 
// console.log(abc);

// Another Way 

// rev = [];
// for (const abc of numbers){
//     console.log(abc);
//     rev.unshift(abc)
// }
// console.log(rev)

//Another Way 

// const reversed_numbers = [];
// for (let i = 0; i < numbers.length; i++){
//     const num = numbers[i];
//     reversed_numbers.unshift(num);
// }
// console.log(reversed_numbers);

// const rev_num = [];
// for (let i = numbers.length - 1; i > 0 ; i --){
//     const num = numbers[i];
//     rev_num.push(num);
// }
// console.log(rev_num);



// const ns = [1,2,3,4,5,6,7,8];
// let rev = [];
// for (let i = ns.length - 1; i>0 ; i-- ){
//     rev.push(ns[i]);
// }
// console.log(rev);


const num = [1,2,3,4,5,6,7];
for(i = num.length-1; i >= 0 ; i--){
    console.log(num[i]);
};
