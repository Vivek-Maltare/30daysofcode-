function getData()
{
    console.log("started getData")
    const url="https://api.github.com/users";
    fetch(url)
    .then((response)=>{
        console.log("inside first then")
return response.json();
    })
    .then((data)=>{
        console.log("inside second then");
console.log(data);
    })

}
console.log("before calling getdata");
getData();
console.log("after calling getdata")
function PostData()
{
    const url="https://jsonplaceholder.typicode.com/posts";
    params={
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            title:"vivek",
            body:"foo",
            id:"1"
        })
    }
   
    fetch(url,params)
    .then((response)=>{
 return response.json();
    })
    .then((data)=>{
     console.log(data);
    })
}
PostData();