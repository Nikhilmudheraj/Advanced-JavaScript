//Recursion
function pow(x,n){
    if(n=1){
        return x;
    }
    else{
        return x*pow(x,n-1);
    }
}
alert(pow(2,4)) //16 


//closuer
var add=(function(){
    var counter =0;
    return function(){
        counter+= 1;
        return counter
    }
})();
add();
add();
add();   //the counter value will be 3 how many times add repeat that times increment  


//new function
//  syntax:  let func =new Function([arg1,....,argn],functionBody); 
let sum=new Function('a','b','return a+b');
alert(sum(2,3));   //5   


//Arrow Function
hello=() => {
    document.getElementById('demo').innerHTML+=this;
}
//window object calls the function
window.addEventListener('load',Hello);
//button object calls function
document.getElementById('btn').addEventListener('click',Hello);


//rest parameter & spread operator
function fun(...input) {
    let sum=0;
    for(let i of input){
        sum+=i;
    }
    return sum;    
}
console.log(fun(1,2)); //3
console.log(fun(1,2,6));  //9
console.log(fun(1,2,4,8)); //15  

let arr=[1,2,3];
let arr2=[4,5,7];
arr=[...arr,...arr2];
console.log(arr);   //[1,2,3,4,5,7]


//global object
alert("hello");
//similar to
window.alert("hello");


//function object
function sayHi() {
    alert("Hi");
}
alert(sayHi.name);//sayHi
function f2(a,b){
}
function many(a,b,...more){}
alert(f2.length); //2
alert(many.length)  //2


//set Time Out & set interval
function sayHi(){
    alert('Hello');
}
setTimeout(sayHi,1000);

//repeat with the interval of 2 sec
let timerId = setInterval(() => alert('tick'),2000);
//after 5 seconds stop
setTimeout(() => {
    clearInterval(timerId);alert('stop');}, 5000);


//function binding
let user={
    firstName: 'nikhil'
};
function func(){
    alert(this.firstName);
}
let funcuser = func.bind(user);
funcuser();  //nikhil


//javascript  namespaces
let num=5;
var obj ={};
var str = 'Hello Edureka';
function sum(x,y){
    total = x+y;
    return total;
}
numr = sum(3,3);


//prototype
let pet={
    eats:true
};
let dog ={
    jumps:true
};

dog._proto_=pet; //(*)
//we can find both properties in dog now;
alert(dog.eats); //true(**)
alert(dog.jumps); //true

// prototype methods obj with out _proto_
let pet={
    eats: true
};
//create a new obj with pet as a prototype
let dog = Object.create(pet);
alert(dog.eats); //true
alert(Object.getPrototypeOf(dog)==pet); //true
Object.setPrototypeOf(dog,{});  //change the prototype of 


//error handling
try{
    alert("begin try runs"); //(1)
    //...errors here
    alert("END TRy runs"); //(2)
} 
catch(err){
    alert('catch is ignored as there are no errors'); //(3)
}



//modules
var MODULE =(function (){
    var module ={};
    var privateVariable = 7;

    function privateVariable(){
    //..
    }

    module.moduleproperty =1;
    module.moduleMethod = function(){
    //...
    };
    return module;
}());



//chainning javascript methods
account.number("123556").setBalance(12000).applyCredit(200);
