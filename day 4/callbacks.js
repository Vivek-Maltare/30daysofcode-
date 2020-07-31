let student=["vivek","ram","shyam"];
function fun1(callback)
{
 setTimeout(() => {
    student.push("radha");
        console.log("element is added");
        callback();
    }, 3000);
}
function fun2(){
    setTimeout(() => {
        console.log("element fetched");
        console.log(student);
    }, 1000);
}
fun1(fun2);


