console.log('OOP in JS')

//grouping or encapsulating related properties and methods in one object is called object oriented programming
// step 1
//creating object name, age, email are properties and login(), logout() are methods it is not good not multiple users go wth creating class of object
// const userone ={
//     name:'Raghu',
//     age:20,
//     email:'Raghumn688@gmail',
//     login(){
//         console.log('Raghu has logged in')
//     },
//     logout(){
//         console.log('Raghu has logged out')
//     },
// }
// userone.login()
// console.log(userone.email)

//step 2
// class of object
// this keyword refer to current user
class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins = 0;
        this.courses = [] 
    }
    static great(){
        console.log('welcome to community')
    }
    login(){
        console.log(`${this.name} has logedin`)
        return this;
    }
    logout(){
        console.log(`${this.name} has logedout`)
        return this;
    }
    addcoins(){
       this.lucoins ++;
       console.log(`${this.name} has ${this.lucoins} coins`)
       return this;
    }
    getdetails(){
        console.log(`name is ${this.name} age is ${this.age} email is ${this.email} `)
    }
}
// here we adding users
let user1 = new User('Raghu', 23, 'Raghumn688@gmail.com')
let user2 = new User('Ravi', 43, 'ravi@gmail.com')
let user3 = new User('Raju', 28, 'Raghumn688@gmail.com')
let user4 = new User('sowmya', 25, 'sowmya@gmail.com')
// user1.login()
// console.log(user1.name)
// user2.logout()
// console.log(user2.age)
// user2.addcoins()

// step 3
// if add some special properties or methods
//here el is loop through users array (email element only) compare every user email with which user you pased inside delete_user(user1)
class moderator extends User{
    delet_user(user){
        users = users.filter((el)=>{
            return el.email != user.email;
        })
        
    }


}
// here we add moderator and he is also one user
let mod = new moderator('berlin', 32, 'b@gmail.com');
// step 4
class Admin extends moderator{
    addcourse(user, course){
        user.courses.push(course)
        console.log(user)
    }


}
let admin = new Admin('Deva', 45, 'd@gmail.com')
let users = [user1, user2, user3, user4, mod, admin]
admin.addcourse(user1, 'python')
admin.addcourse(user1, 'C++')
admin.addcourse(user1, 'java')
admin.addcourse(mod, 'javascrip')

// mod.delet_user(user1) // whoever email is  matched to user1 delete that user
// if email is not match keep it in users
console.log(users)


// if use return this follow bellow to call
// user1.login().addcoins().addcoins().logout()
// user2.getdetails()


// static
// we can't call method by user , onlly possible by class name 
// used in great method
// user1.great() // this gives error
User.great() // this is correct


