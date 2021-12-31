console.log('Form2')


function validation(){
    const username = document.getElementById('name').value;
    const namemsg = document.getElementById('namemsg');
    const email = document.getElementById('email').value;
    const emailmsg = document.getElementById('emailmsg');
    const pass = document.getElementById('pass').value;
    const passmsg = document.getElementById('passmsg');
    
    if(username==""){
        namemsg.innerHTML = 'username can not be empty';
        return false; 
    }
    if(username.length < 4){
        namemsg.innerHTML = 'username character is not less than 4 ';
        return false;
    }
    if(email == ''){
        emailmsg.innerHTML = 'email can not be empty';
        return false;
    }
    if(!email.includes('@')){
        emailmsg.innerHTML = 'email should contain @';
        return false;
    }
    if( pass == ''){
        passmsg.innerHTML = 'Password can not be empty';
        return false;
    }
}

