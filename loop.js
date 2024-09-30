const friends = ['Elon','Bill','Chill','Doggo','Waren'];

for (const abc of friends){ //using for of
    console.log(abc)
};

for (let i= 0; i < friends.length; i++){  //using for loop
    console.log(i)
};

let i = 0;
while (i <friends.length){  //using while loop 
    console.log(i);
    console.log(friends[i]);
    i++;
};

