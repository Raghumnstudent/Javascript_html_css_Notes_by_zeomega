console.log('Form1')

// taking form 
//method 1 getting by name of form
// const loginform = document.forms.Raghuform
// console.log(loginform)

// method 2 getting by id
const login = document.getElementById('Myform')
const message = document.getElementById('msg')

login.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log(event.target.name.value);
    if(login.name.value=="" && login.email.value ==""){
        message.innerHTML = 'Name & Email is empty';
    }
    else if(login.name.value == ""){
        message.innerHTML = 'Name  is empty';

    }
    else if(login.email.value == ""){
        message.innerHTML = 'Email is empty';
    }
})
