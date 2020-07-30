let intro={
    name:"vivek maltare",
    education:"B.tech",
    address:{
        city:"indore",
        state:"mp"
    }
};
//destructuring object

const {name,education,address:{city,state}}=intro;
console.log(name);
console.log(education);
console.log(city);
console.log(state);

//destructure the following object
const student={
    name1:"kayle",
    age:24,
    projects:{
        dicegame:"two player dice game using javascript"
    }
};
//destructuring it
const {name1,age,projects:{dicegame}}=student;
console.log(name1);
console.log(age);
console.log(dicegame);

//destructuring arrays
let array=['ram','shyam','sita'];
console.log(array);
//destructuring it
let [first,second,third]=['ram','shyam','sita'];
console.log(first);
console.log(second);
console.log(third);