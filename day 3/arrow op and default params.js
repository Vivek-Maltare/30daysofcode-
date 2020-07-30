function lunch(food)
{
    return "i will eat"+food+"for dinner";
}
console.log(lunch("chicken"));
//destructuring it using arrow operator

const lunchday=(food1)=>{
    return  "i will eat"+food1+"for dinner";
}
console.log(lunchday("pork rind"));
//default params
 let dinner=(food)=>{
     return "i am going to buy" + food +"from the grocery shop";
 }
 console.log(dinner("pancakes"));
 //if no param provided
 console.log(dinner());//output will give undefined at the place of food

 //destructure it and provide default param

 dinner=(food="something")=>{
    return "i am going to buy" + food +"from the grocery shop";
 }
 console.log(dinner());

 //includes function

 const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

 if(listIngredients.includes("chcolate"))
 {
     console.log("i am going to make a chocolate cake today");

 }
 else{
    console.log("i can't make a chocolate cake today because i am missing with ingredients");
 }