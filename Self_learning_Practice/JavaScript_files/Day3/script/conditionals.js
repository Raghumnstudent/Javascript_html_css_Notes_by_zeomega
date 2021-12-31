console.log('Learning conditional statements')

/*
if elseif else
Ternary 
*/

// prompt take input as string as shoe in bellow
// let age = prompt('Enter your age',0);
// console.log(age, typeof(age))

/*
if(condition){
    code to evaluate if condition is true
} */

//if
// if(age<=18){
//     console.log('you are adult')
// }

//if else
// if(age<=18){
//     console.log('you are adult') 
// }
// else{
//     console.log('you are young')
// }

// if(age == 18){
//     console.log('you are 18') 
// }
// else if(age==20){
//     console.log('you are 20') 
// }
// else if(age==22){
//     console.log('you are 22') 
// }
// else if(age==24){
//     console.log('you are 24') 
// }
// else {
//     console.log('you are grater than 24 or less than 18') 
// }

//Ternary operator
//syntax: condition? value if true: value if false

// let age = 20;
// console.log(age>=18? 'you are adult':'you are not adult')

// let result = (age==18) ? 'you are 18': 
//              (age==19) ? 'you are 19':
//              (age==20) ? 'you are 20': 
//              'you are above 20 or below 18' 
// console.log(result)

// switch case
/*
switch(arg){
    case 1:
        code here;
        break;
    case 2:
        code here
        break;
    case 3:
        code here
        break;
    default:
        code here
        break;
}
*/ 

let age = 21;
switch(age){
    case 18:
        console.log('you are 18');
        break;
    case 20:
        console.log('you are 20');
        break;
    case 21:
        console.log('you are 21');
        break;
    default:
        console.log('you are above 22 or below 18')
        break;
}


