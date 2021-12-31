console.log('index.html')
console.log('Mini Projects')


//create element(assum elm means element)
//craeting element and add that element to list 
//create  a tag add to list, in that a tag inner HTML and https link as in bellow 
const list1 = document.querySelector('#list');
console.log(list1)

function createelm(el){
    return document.createElement(el)
}
let li = createelm('li');
let a = createelm('a')
// console.log(li)
list1.appendChild(li);
li.appendChild(a);
a.innerHTML = 'Facebook'
a.setAttribute('href', 'https://facebook.com')

list1.insertBefore(li, document.getElementsByTagName('li')[1]) // Facebook is moves to second position

list1.removeChild(document.getElementsByTagName('li')[1])









// const divelm = document.createElement('div')
// console.log(divelm)

// const classel = document.createElement('class')
// console.log(classel)

// const spamelm = document.createElement('spam')
// console.log(spamelm)

// const headelm = document.createElement('head')
// console.log(headelm)

// const bodyelm = document.createElement('body')
// console.log(bodyelm)




