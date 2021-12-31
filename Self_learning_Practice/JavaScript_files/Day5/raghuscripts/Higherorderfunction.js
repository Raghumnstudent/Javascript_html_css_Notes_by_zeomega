console.log('Higher Order Function')

//MAP

//normal function method
// let num = [1, 2, 5, 6, 7, 8, 10]
// num.forEach(function(f){
//     console.log(f*f)
// }) 

//Arrow function method
// num.forEach((el)=>{
//     console.log(el**2)
// })

// using map it is in array formate only
// let square = num.map((el)=>el**2)
// console.log(square)

// Filter is used to check condition then perform some function
// let even = num.filter((e)=>e%2==0)
// console.log(even)

// let evensquare = num.filter(e=>e%2==0).map((e)=>e**2)
// console.log(evensquare)

let users=[{'user':'a'},{'user':'b'}, {'user':'c'}, {'user':'d'}, {'user':'d'}]
let newusers = users.map((element)=>{
    let mark = Math.random()*100;
    element.marks = mark;
    return element
})
console.log(newusers)

// let pass = newusers.filter((element)=>{
//     if(element.marks>35){
//         return element;
//     }
// })
// console.log(pass)

//Reduce
//creating array then converting into object using object
// acc is accumulator val is value, here take values one by one assigned to name and take length assigned to len then push into emty acc then return acc to red variable
// let names = ['Raghu', 'Ravi', 'Raju', 'Nagendra']
// let red = names.reduce((acc, val)=>{
//     let obj ={
//         name:val,
//         len:val.length
//     }
//     acc.push(obj);
//     return acc;
// },[])
// console.log(red)

// reduce basic operation 
// it take each value the added to acc at end of value return keyword returns acc to sum that's why we use sum inside console
// let num = [1, 2, 5, 6, 7, 8, 10]
// let sum = num.reduce((acc,val)=>{
//     acc += val
//     return acc
// },0)
// console.log(sum)









