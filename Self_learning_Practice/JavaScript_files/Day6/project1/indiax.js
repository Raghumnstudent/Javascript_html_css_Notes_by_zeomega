let text = document.getElementById('text');
let button = document.getElementById('btn');
console.log(text)
console.log(button)
button.onclick = ()=>{
    if(text.className == 'show'){
        text.className = '';
        button.inerText = 'Read More'
    }
    else{
        text.className = 'show'
        button.innerText = 'Read less'
    }
}
