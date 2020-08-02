

//redux is used to remove the synchronization problems between multiple UI components of an application. to reflect certain changes in every ui component we need not to make it for individual components i.e individual components does not maintain there state.
//instead, there is a js object called store which does it all for every ui component.so necessary changes are required to be made only at one place.
//in short,store is a sort of DB for front end UI where data required by every ui  comp. is kept.
//redux also preserves page states.
//in js functions are like first class citizens that can be treated like any other js object.they can be assigned to a variablb,they can be passed as an argument to other function or they can be returned from any other  function/

function sayHello()
{
    return "HI VIVEK";
  
}
//1
let a=sayHello();
console.log(a);
//2 
function returnValue(sayHello2)
{
 console.log(sayHello2());
}

returnValue(sayHello);

//higher order functions
const trims=str=>str.trim();
const wrap=str=>`<div>${str}</div>`;
const result=wrap(trims("vivek"));
console.log(result);

// pure funtions
// functions that always gives the same value for the same arguments
//ex-this function will always give the same values for the parameter 10 and 20
function add(a,b)
{
    return a+b;
}
let vari=add(10,20);
console.log(vari);

//not pure function
//this function will always give different values for the same argument 
function a1(number)
{
    return number+Math.random();
}

let vari2=a1(10);
console.log(vari2);

let book={bookName:"jane eyre",ispublished:"false"};
function publish(book)
{
    book.ispublished=true;
}
 publish(book);
console.log(book);