console.log('modern javascript')

//Destructing objects
// let person = {
//     name:'Raghu',
//     age:'23',
//     hobby:'coding!',
//     address:{
//         state:'karnataka',
//         distric:'Mandya',
//         city:'Malavalli'
//     }
// }
//common method
// console.log(person.age)
// console.log(person.name)
// console.log(person.address.state)
//destructing method
// const{ name, age, address:{state}} = person
// console.log(name, age, state)

//Destructing array
// let [firstname,lastname] = ['Ravi', 'Raju', 'Nagendra', 'sowmya']
// console.log(`${firstname} ${lastname}`)

//spread operator(...arrayname) in array
// let freiends = ['Raghu', 'Nagendra', 'Keerthi', 'Pavan' ]

// let fb_fr = ['sathis', ...freiends, 'mohan', 'Nagesh'] // here it copy the privious elements only
// console.log(fb_fr)

// if we update element to original array(friends) assigned array(college)  is also updated
// let college = freiends
// freiends.push('Darshan')
// freiends.push('chethan')
// console.log(freiends)
// console.log(college)

//spread operator(...objectname) in object

// let person = {
//     name:'Raghu',
//     age:'34',
//     city:'Malavalli'
// }

// let employee = {
//     ...person,
//     salary:60000,
//     designation:'Accountant'
// }
// console.log(person)
// console.log(employee)

//Arrow Function
//this normal function
// let add = function(num1, num2){
//     return num1+num2
// }
// let result = add(7, 9)
// console.log(result)

// this is Arrow(=>) function it says give me the parameter and i will operate on given function then assigned to variable
// let add = (num1, num2)=> num1+num2
// let result = add(756, 978)
// console.log(result)

// let join = (a, b)=>`the value of a is ${a}, & b is ${b}`
// let line = join('Hello', 'Raghu')
// console.log(line)

let great = name => `welcome ${name}`
let g = great('Raju')
console.log(g) // if one parameter no need ()












