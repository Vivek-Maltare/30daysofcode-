//document object model
/* dom is a colection of nodes.every element in a html document is a node itself like <html> <head> <body>.
they are of three types:
ex- <p class="xyz">this isa  paragraph</p>
here, element node=p
attribute node="xyz"
text node="this is a paragraph"
*/

 var a=document.getElementById("heading");
console.log(a);
console.log(typeof a);
var b=document.getElementById("heading");
console.log(b);
//textContent property is used to view the content of the  element ex-
 var List=document.getElementById("a");
 //console.log(List);
 console.log(List.textContent);
 //we can also change the content of an element as
 //List.textContent="vivek";
 console.log(List.textContent);
 //InnerHTML is used to set or return the html content of an element.
console.log(List.innerHTML);
//set  content
//List.innerHTML="hi this is vivek";
console.log(List.textContent);
//query selector returns the first element that matches the specified css selector
//example
let example1=document.querySelector("#para");
console.log(example1);
//query selector all method return all the elements that matches the specified css selector
const list=document.querySelectorAll("li");
console.log(list);
const example3=document.querySelectorAll(".a");
console.log(example3);

//head.style.color="blue";
const list1=document.querySelectorAll("li");
for(let i=0;i<list1.length;i++)
{
    list1[i].style.backgroundColor="red";
}
//cssText property allows us to set multiple styles to an element
list1[0].style.cssText="background-color:blue;color:red;";
//className property assigns the specified className to any html element
const head=document.getElementById("heading");
head.className="changeBG";
//classList property returns the list of classes in an array type object
head.classList.add("changeFT");
console.log(head.classList);
