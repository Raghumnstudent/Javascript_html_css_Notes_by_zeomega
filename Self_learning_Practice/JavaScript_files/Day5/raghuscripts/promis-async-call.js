console.log('Promises, Async Await')
// Promises have three parameters pending,resolve, reject

let users = [
    {
        name:'ravi',
        age:34,
        mail:'r@gmail.com'
    },
    {
       name:'tony',
       age:35,
       mail:'t@gmail.com'
    },
    {
        name:'tom',
        age:23,
        mail:'tom@gmail.com'
    },
]
// format
// function nameoffunction(){
//     setTimeout(code, delay[ms])
// }

// function getusers(){
//     setTimeout(()=>{
//         let result = '';
//         users.forEach(el=>{
//             result += `The user is ${el.name}\n`
//         });
//         console.log(result)
//     },1000);
// }


// function creator(user, callback){
//     setTimeout(()=>{
//         users.push(user);
//         callback();
//     },3000);
// };
// getusers();
// creator({name:'Berlin', age:34, mail:'berlin@mail.com'});

// creator({name:'Berlin', age:34, mail:'berlin@mail.com'}, getusers);

// creator function create new user After 1 second then it add to getusers function,so getusers function excecuted After 4 seconds 
// this problem in this normal method if we set time of creater function greater than getusers time, new user can't added because new user take more time to creat new user, before that getuserd function excecuted
//solution use callback parameter in creator function or Promises

//Promises
// function creator(user){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             users.push(user);
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Oops an error occured')
//             }
//         },3000)
//     })
// }

// creator({name:'Berlin', age:34, mail:'berlin@mail.com'}).then(getusers)
// .catch(error=>console.log(error)) use if error is true

//example two
// const userdata = new Promise((resolve, reject)=>{
//     const error = false;
//     if(error){
//         reject('an error is occured')
//     }
//     else{
//         resolve({
//             name:'Raghu',
//             age:34,
//             country:'India'
//         })
//     }
// })
//  userdata
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

//Async Await
//which varable or function  is assigned to Await that is wait till  Async variable or function is excecuted
photos = [];
async function photoupload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            photos.push('raghu');
            resolve('Profile updated')
        },3000)

    })
    let result = await status;
    console.log(result)
    console.log(photos.length)
}
photoupload();
photoupload();
// After 3 seconds async function(line 92 to 97) is excuted then only await code is excecuted(line 100 to 102)





