let heading=document.querySelector("#heading");
const btn=document.querySelector(".btn");
btn.onclick=()=>{
    console.log("clicked");
};
btn.onmouseover=()=>{
heading.style.cssText="background-color:blue;text:white";
}
btn.addEventListener('click',(e)=>{
    heading.style.cssText="background-color:pink;color:blue;"
 
});
const paragraph=document.querySelector("#para");
console.log(paragraph.getAttribute("id"));
console.log(paragraph.getAttribute("class"));
console.log(paragraph.getAttribute("title"));
paragraph.setAttribute('style',"background-color:blue");
paragraph.removeAttribute("style");
console.log(paragraph.hasAttribute("style"));
const ul=document.getElementById("uli");
console.log(ul.parentElement);
console.log(ul.parentNode);
console.log(ul.parentNode.parentNode);
console.log(ul.childNodes);
console.log(ul.children);
console.log(ul.firstChild);
console.log(ul.firstElementChild);
const el1=document.createElement("li");
const el2=document.createTextNode("hello");
el1.appendChild(el2);
console.log(el2);
ul.appendChild(el1);
console.log(ul);
ul.insertBefore(el1,ul.children[0]);
console.log(el1);