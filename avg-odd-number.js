function avgOddNumber(numbers){
    let Odd = [];
    for (const number of numbers ){
        if(number % 2 === 1){
            Odd.push(number);
        }
    }
    console.log(Odd);
    let sum = 0;
    for (const avgN of Odd){
        sum = sum + avgN;
    }
    const count = Odd.length;
    const AvgNumber = sum / count;
    return AvgNumber;
    
  
}   
   
const numbers = [1,2,3,4,5,6,7,8,9];
const AvgNumber = avgOddNumber(numbers);
console.log("The Average Odd Number: ", AvgNumber);
    