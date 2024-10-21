function removeDuplicates(array){
    let unique = [];
    for(abc of string){
        if(unique.includes(abc)===false){
            unique.push(abc);
        }
    }
    return unique;
}

const numbers= [1,2,3,4,6,1,2,3,8,9];
const string = ['Rafi','Rokon','Hasan','Rafi','A','A'];
const result = removeDuplicates(string);
console.log(result);