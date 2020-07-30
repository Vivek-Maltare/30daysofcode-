const student=[
    {name:"vivek" ,city:"indore"},
    {name:"ram",city:"dewas"},
    {name:"shyam",city:"khargone"}
];
for( const students of student)
{
    console.log(`${students.name} lives in ${students.city}`);
}
//spread operator
let shoppinglist=['eggs','milk','butter'];
let one=[...shoppinglist];
 console.log(one);
 let two=['cheese',[...shoppinglist],'pork'];
 console.log(two);

//rest operator
function add(...nums)
{
    return  nums;
}
console.log(add(5,10,20,30));
// import and export


