console.log("hello");
async function fun1()
{
    console.log("inside harry function");
    const response=await fetch("https://api.github.com/users");
    console.log("before response");
    const users=await response.json();
    console.log("users resolved");
    return users;
}
console.log("before calling fun1");
let a=fun1();
console.log("after calling fun1");
console.log(a);
a.then(data=>console.log(data))
console.log("last line of js file");