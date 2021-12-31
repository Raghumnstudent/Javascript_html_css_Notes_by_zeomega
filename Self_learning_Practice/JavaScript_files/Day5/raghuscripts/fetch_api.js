console.log('Fetch API')

//hhttps://jsonplaceholder.typicode.com/comments


// Make a get request
fetch('https://jsonplaceholder.typicode.com/comments/5')
.then(response=>response.json()) // convert respose to json format
.then(data=>console.log(data))


// Make a post request
fetch('https://jsonplaceholder.typicode.com/comments',{
    method:'Post',
    body:JSON.stringify({
        userId:343,
        title:'Posting to json',
        body:'welcom to fetch api'
    })
}).then(response=>response.json())
.then(data=>console.log(data)) // our post is 501

// jokes api

async function fetchjokes(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response;
    console.log(data)
}
fetchjokes()
// before using async and await gives promise pending because before fech api it go to code
// use async await, first function is excecuted then response is excecuted then only data is excecuted

let obj1 = {
    name:'Raghu',
    age:23,
    canDrive:'false'
}

console.log(obj1) // object format
let str = JSON.stringify(obj1)
console.log(str) // json format

// stringify converting object into json format then json format is ready to upload api

let strobj = JSON.parse(str);
console.log(strobj) // json into object


