console.log('Hey I am Raghu')

// Difference between Numbers() & parseint()
//backics(`) is used to add variable in between string statements using ${} as in below
let strnum = '156ghu57Ra'
console.log(`the original value is ${strnum} & type is ${typeof strnum}`);

console.log(Number(strnum))
// Number is collect numbers only if character is there in numbers as in above it return NaN 
console.log(parseInt(strnum)) // parseInt take stop collecting valu as soon as character come 
let one = 1
let two = 2
console.log(one + two)
let three = '3'
let four = '4'
console.log(+three + +four) // uniary + convert str into num

