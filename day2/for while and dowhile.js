let a=[1,2,3,4,5];
let total=0;
for(let i=1;i<=a.length;i++)
{
    console.log(i);//1 2 3 4 5
    total+=i;
}
console.log(total);//5
const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];
let total1=0;
for(const cart of cartItems)
{
    total1+=cart.quantity*cart.price;
}
total1*=0.08;
console.log(total1);
let count=0;
while(true)
{
    if(count<=10){
    count++;
    console.log(count); 
    }
    
    else{
        console.log("no more counts")
        break;
    }
    
}
