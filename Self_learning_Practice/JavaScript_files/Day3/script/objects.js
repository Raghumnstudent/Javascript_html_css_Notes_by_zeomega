console.log('object')

// let name = {key:value}
let person1 = {name:'Raghu', age:22, skills:{a:'planing', b:'coding'}, state:'Karnataka', drivecar:false}
let person2 = {name:'Raju', age:29, skills:['driving', 'taking'], state:'Karnataka', drivecar:true}
console.log(person1)
console.log(person1.name)
console.log(person1['drivecar']) // same as above but this is feel complex
console.log(person1.skills.a)
console.log(person1.skills) // here we can't access indivisually skill
console.table(person1)
console.table(person2)

