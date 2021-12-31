console.log('Form3')

const button = document.querySelector('#btn')
const list = document.querySelector('#list')

const rbutton = document.querySelector('#rbtn')
const rlist = document.querySelector('#remove')

button.onclick = function(){
    let item = document.querySelector('#todo').value;
    console.log(item)
    let text = document.createTextNode(item);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.Myform.reset();
}
console.log(list)

rbutton.onclick = function(){
    list.removeChild(document.getElementsByTagName('list')[2])
    document.forms.Myform.reset();
}


