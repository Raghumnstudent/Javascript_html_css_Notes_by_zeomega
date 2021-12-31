console.log('learning Functions'); // use semicolon at end of each line is optional

/* syntax
function nameoffunction(paramer any){
    write code here
*/

// fuction is used if we want bunch of code repeatedly 
function hello(){
    console.log('Hello I am Raghu')  // defining the function
} 
hello();  // calling the function


let raghu = function(){
    console.log('I am function assigned to variable')
}
raghu()  //here we created function the assigned to variable 

//called annonimas function if name of function is not used as bellow
let welcome = function(name='Raghu'){
    console.log(`'hello ${name}`)
}
welcome() // if we don't give value it take you assigned (here default is Raghu) to default value 
welcome('Ravi')


let addition = function(num1=0, num2=0){
    let sum = num1+num2
    return sum // return assign result to function name
}
let add = addition(8, 6)
console.log(add)

