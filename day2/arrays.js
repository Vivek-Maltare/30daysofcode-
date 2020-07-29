let example1=[1,2,3,4];
console.log(example1.indexOf(2));//1
console.log(example1);//1 2 3 4
example1.push(10);
console.log(example1);// 1 2 3 4 10
example1.pop();
console.log(example1);// 1 2 3 4 
example1[0]=5;
console.log(example1);//5 2 3 4
example1.forEach(element => {
    console.log(element);//5 2 3 4
});
example2=["toilet paper","bottled water","sanitizer"];
console.log(example2);//toilet paper bottled water sanitizer
example2[0]="paper towels";
console.log(example2);//paper towels bottled water sanitizer
example2.pop();
console.log(example2);//paper towels bottled water
example2.push("bleach");
console.log(example2);//paper towels bottled water bleach