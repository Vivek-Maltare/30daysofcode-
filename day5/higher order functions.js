// for each
let arr=[
{companyName:"company one",companyType:"retail",started:"1981"},
{companyName:"company two",companyType:"automobile",started:"1988"},
{companyName:"company three",companyType:"retail",started:"1991"},
{companyName:"company four",companyType:"automobile",started:"1995"},
{companyName:"company five",companyType:"automobile",started:"2000"},
{companyName:"company six",companyType:"retail",started:"2011"},
{companyName:"company seven",companyType:"retail",started:"2019"}
];
let ages=[10,20,30,40,50,60,70];
// using normal for loop
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
//using for each
arr.forEach(function(arr1){
    console.log(arr1);
})
//filters
//using normal for loop
let arr2=[];

for(let i=0;i<ages.length;i++)
{
    if(ages[i]>=20)
    {
        arr2.push(ages[i]);
    }
    
}
console.log(arr2);
//same with filter
const arr3=ages.filter(function(age){
if(age>=20)
{
    return true;
}
})
console.log(arr3);
const arr4=ages.filter((age)=>{
if(age>=20)
{
    return true;
}
})
console.log(arr4);
const arr5=arr.filter(company=>company.companyType==='retail');
console.log(arr5);
//map along with filtering can create  a new array from an existing array
const com=arr.map(function(company){
    return company.companyName;


})
console.log(com);
const age1=ages.map(age=>
Math.sqrt(age)).map(age=>
    age=age*2)
console.log(age1);
//sort
let com4=arr.sort(function(a,b){
    if(a.started>b.started)
    {
        return 1;
    }
    else{
        return -1;
    }
})
console.log(com4);
let com5=arr.sort((a,b)=>(a.started>b.started?1:-1));
console.log(com5);

let com6=ages.reduce(function(total,age){
return total+age;
},0)
console.log(com6);