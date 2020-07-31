let student={
    name:"vivek",
    city:"indore",
    education:"b.tech"
    
};
function fun1()
{
    return new Promise((resolve,reject)=>{
     setTimeout(() => {
        const error=false;
       console.log(student);
         if(error==false)
         {
             resolve();
         }
         else{
             reject();
         }
     }, 1000);
    })
}
fun1().then(function(){
    console.log("your  code was executed successfully");
})
.catch(function(){
    console.log("your code  was not executed successfully");
})