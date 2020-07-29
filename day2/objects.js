//objects store data in key value pairs where keys are specifically called property.
//example
let example1={
    FirstName:"vivek",
    LastName:"maltare",
    age:20,
    Address:{
city:"indore",
state:"mp",
fulladdress:["city","state"]
    },
    country:"india"
};
console.log(example1.FirstName);//vivek
console.log(example1.hasOwnProperty('LastName'));//true
console.log(Object.keys(example1));//all keys
console.log(Object.values(example1));//all values
console.log(example1.Address.city);//indore
let example2={
    FName:"sanjay",
    Lname:"sharma",
    address:{
        city:"agra",
        state:"up"
    },
    hobbies:["singing","dancing","reading"],
   isGoldMember:"true"
};
console.log(Object.keys(example2));//all keys
console.log(Object.values(example2));// all values
console.log(example2.isGoldMember);//true