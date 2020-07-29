const age=18;
if(age<=12)
{
    console.log("child");
}
else if(age>12&&age<=20)
{
console.log("teenager");
}
else{
    console.log("adult");
}

 var UserType=window.prompt("enter user type"+UserType);
switch(UserType)
{
    case "shopper":
        console.log("do you want  to upgrade to super  shopper");
        break;
        case "guest":
            console.log("do you want to upgrade to shopper");
            break;
            case "supershopper":
                console.log("you are well upgraded");
           default:
               console.log("welcome guest");
}