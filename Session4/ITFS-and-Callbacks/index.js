//ITFE
const empid = (function(){
    let count = 0;
    return function(){
        count++;
        return `empid${count}`
        // return "empid "+count
    }
})();

//calling ITFEs
console.log("New employee Ids ")
console.log('Raghu '+empid())
console.log('Raju '+empid())
console.log('Ravi '+empid())

//callback
function fullname(firstname,lastname,callback){
    console.log("My name is  "+firstname+" "+lastname)
    callback(firstname)
}
function welcome(name){
    console.log("welcome "+name)
}

fullname('Raghu','M N',welcome)
fullname('Raghu','M N',welcome)