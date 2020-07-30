class animal
{

   constructor(name,country)
   {
       this.name=name;
       this.country=country;
   }
 print()
 {
     return `${this.name} was born in ${this.country}`;
 }

}
let example=new animal("vivek","india");
console.log(example.print());
class tennisplayer  extends animal
{
    constructor(name,country,age)
    {
        super(name,country);
        this.age=age;
    }

    print2()
    {
       console.log(`${this.name} is ${this.age} years old and lives in ${this.country}`);
    }
}
let example2=new tennisplayer("ram","india",20);
example2.print2();

//promises

const UserData=()=>{
    const user={
        name:"vivek"
    };
    return new Promise((resolve,reject) => {
         setTimeout(()=>{
           const other=user.name;
           if(other)
           {
               resolve("your name is"+other);
           }
           else{
               reject("your name was not found");
           }
         },3000)

    })
}
UserData()
.then((success)=>{
    console.log(success);
})
.catch((error)=>{
console.log(error);
})