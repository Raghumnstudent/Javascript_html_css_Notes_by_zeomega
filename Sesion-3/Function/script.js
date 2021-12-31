//function declaration

//function without parameter
function print()
{
    console.log('Function without Parameters')
}
print()

//function with parameters
function myfunction(num1,num2){
    var a = num1+num2
    var b = num1*num2

    return a+b
}

result = myfunction(2,4)
console.log(result)


function tocelcious(f){
    return (5/9)*(f-32)
}

console.log("The tempreture is "+tocelcious(70))


//pass display function as argument
function display(value1,value2){
    console.log(value)
}

function add(n1,n2,callback){
    result = n1+n2
    callback(result)

}

add(23,54,display)


//function return function

function name123(n,m){console.log("welcome "+n+" to "+m)}

function test(){
    return name123('Raghu',"ma")

}
test()
// result = test('Raghu',"Malavalli")
// console.log(result)