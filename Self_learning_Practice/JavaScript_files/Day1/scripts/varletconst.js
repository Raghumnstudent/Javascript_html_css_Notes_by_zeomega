// var is the global scope we can't use the variable name again once declared by var keyword it gives error  
var name = 'Raghu' // Sting
var age = 22  //Number
var can_drive = false  // Boolean 
var speaks = ['Kannada', 'English']  //Array
var my_details = {name:'Raghu',age:22,can_drive:false}


console.log(name)
console.log(age)
console.log(can_drive)

console.log(my_details)
console.table({speaks})
console.table({name,age,can_drive})


// var a = 10;
// console.log(a);

var a = null; // null is not equal to zero
console.log(a);

// Let is local scope  we can use same variable declared by let keyword outside of bunch of code as shown in below name variable and if use same variable name inside bunch of code it give error variabe name has already been declared

{  let city
    let college='Ramaiah institute of technology'
    city='Bangalore'
    console.log(city)
    }

let city = 'Mangaluru'
console.log(city)

// const means constant
const country = 'india'; // we can't assign another value to const variable once we assigned value
console.log(country);

//  const country = 'UK'; // here it gives error
// console.log(country);

// we can't replace entire array but we can add element 
const friends = ['Nagendra', 'Raju']
console.log(friends)

//push method is used to add element to the array
friends.push('Keerthi')
friends.push('Kiran')
console.log(friends)

/* Naming  a variable
1. variable name can't start with number
2. It can start with letter, $, _
3. $ is mainly used in jquery
4. _ is used to declare private variables [OOPS in javascript] */

/* style of writting the name
1. camelcase ***** important used here 
2. kebabcase
3. snakecase
4. Pascalcase */
