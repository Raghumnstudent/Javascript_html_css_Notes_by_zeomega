console.log('DOM Basics')

// getting the elements from HTML file
/*
1) getElementById
2) getElementByclassName
3) getElementByTagName
4) querySelector
5) querySelectorAll
*/

// const title1 = document.getElementById('title')
// console.log(title1)
// console.log(title1.innerHTML)
// console.log(title1.innerText)

// const data = document.getElementsByClassName('imp')
// console.log(data) // we get all class

const allp = document.getElementsByTagName('p')
// console.log(allp) // we get all tags

// loop through the html is possible only when make a array then use forEach as shown in bellow
// const datarray = [...allp]
const datarray = Array.from(allp);

datarray.forEach(el=>{
        console.log(el)
    })

// for id --> #
// for class --> .
// for page --> p
// query types gives Nodeselection here we can't push etc methods
// console.log(document.querySelector('.imp'))
// console.log(document.querySelectorAll('.imp'))

const data1 = document.querySelectorAll('p')
console.log(data1)
// data1.forEach(el=>{
//     console.log(el);
// })

// changing attribute 
const attr = document.getElementById('attribute');
// console.log(attr) // we get entire attribute

// console.log(attr.getAttribute('id')); // here we get id of Attribute
// attr.setAttribute('style', 'color:yellow')
// attr.setAttribute('style', 'background-color:lightblue;color:red')


// adding color using class here we need to creat css file then write code then do this
// attr.classList.add('blue')
// attr.classList.add('yellow')
// attr.classList.remove('blue')
// attr.classList.toggle('blue')
// attr.classList.toggle('red')
//toggle convert color into given color if given  color not there, or  if  convert into default color

// changing color using inline function 
// attr.style.color= 'red'
// attr.style.backgroundColor= 'green' 

// let fruits = ['apple','arrange','bananna','mango','grapes'];
// console.log(fruits);


// const list = document.querySelector('#list');
// console.log(list);

// fruits.forEach(fruit=>{
//     // list.innerText += `<li> ${fruit} <\li>`
//     list.innerHTML += `<li> ${fruit}<\li>`;
// });

//datarray
// console.log(datarray)
// datarray.forEach(para=>{
//     if(para.innerText.includes('amet')){
//         para.classList.add('highlight')
//     }
// })

//click button
//second method
// function showAlert(){
//     alert('Hey I am Raghu')
// }
//another method
// const button = document.getElementById('btn')
// button.onclick = ()=>{
//     alert('Hey I am an alert from the button')
// }

//get name from user and change the title
// const name = prompt('Enter Your Name', 'Raghu')
// title.innerText +=` Welcome to My Webpage ${name}`;

// const dark = document.getElementById('dark')

// dark.onclick = function changecolor(){
//         document.body.style.backgroundColor='black'
//         document.body.style.color= 'white'
//         document.body.style.fontFamily= 'Helvetica'

// }

const ctime = document.getElementById('time')
function clock(){
    // let data = prompt('enter time')
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
// clock();
setInterval(clock, 1000)











