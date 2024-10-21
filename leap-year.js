function leapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){ // this condition: exccept century type year like 1996, 2004, 2006.
        return true;
    }
    else if (year % 400 === 0 && year % 100 === 0){  // this condition: century type year er jonno like 2000,3000,4000.
        return true;
    }
    else{
        return false;
    }
}

const result = leapYear(2040);
console.log(result);