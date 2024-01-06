// print command
console.log('Hello');
// variables
a=10; //Non declared variables
console.log(a);
var a=10; //variable declaration
console.log(a);
{
    var a=90;// value to 90
    console.log(a);
}
console.log(a);
var a=23;
console.log(a);

let b=24;
console.log(b);
{
    let b=50;
console.log(b);
}
b=55
console.log(b);

//Datatypes
console.log(typeof(b));
let firstName='My name is Maya';
console.log(typeof(firstName));

let isAvailable=true;
console.log(typeof(isAvailable));
//undefined 
var t;
console.log(typeof(t));

//Arrays
let arr1=[1,2,3,4,5,'vais'];
console.log(typeof(arr1));
//JS Objects
let person={
    name:'Maya',
    age:25,
    place:'CLT'
}
console.log(person.place)
//Use new Keyword in JS
let car=new Object();
car.brand="Hyundai";
car.model='i10';
car.color='black';
console.log(car);
//Array of objects
var arr_obj=[{name:'vai',loction:'calicut'},{name:'vais23',loction:'Palakkad'}]
console.log(arr_obj[1].loction);

//Operators
let tr=8;
console.log(tr+=3);
//increment operator
let inc=7;
let inc1=inc++;
console.log(inc1);
//conditional statements
if(inc==inc1){
    console.log('The values are equal')
}else{
    console.log('The valus are not equal')
}
//ASS
var num1=10,num2=20;
if(num1==num2){
    console.log('num1 is equal to num2')
}else if(num1>num2){
    console.log('num1 is greater than num2')
}else{
    console.log('num2 is greater than num1')
}
//logical operators && ||
if((inc===inc1)&&(inc==89)){
    console.log('Both values are equal and its 89');
}else{
    console.log('The codition check failed');
}

let re=90;
let ne=100;
let x=(ne-re)+(8**2);
console.log(x)
//Functions
function addval(ad1,ad2){
    var sum=ad1+ad2;
    console.log('The calculated value= '+sum);
}
addval(10,20);//Function call
function subval(sub1,sub2){
    var sum=sub1-sub2;
}
//looping statements
//write a program for printing the numbers 1 to 10
for (let i=0; i<10; i++){
     console.log(i+1);
}
//for of loop
let arr3=['apple','orange','pear','grape','berry']
//for (let i = 0; i < array.length; i++) {
 // console.log(arr3[i]);   
//}

for(x of arr3){
    console.log(x);
}
// for in loop
let person1={name:'joe',age:78,place:'tvm'}
for(item in person1){
    console.log(person1[item]);
}
//while loop
let j=1;
//while (j<10) {
//    console.log(j+1);
//    j++
//}
//do while
do {
    console.log(j);
    j++;
} while (j<=10);
