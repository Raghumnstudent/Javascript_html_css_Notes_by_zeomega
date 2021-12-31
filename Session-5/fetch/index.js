const URL = "https://ghibliapi.herokuapp.com/people"
const main = document.getElementById("main")
main.innerHTML = "<p> loading"

fetch(URL).then((response)=>response.json())
    .then((people)=>main.innerHTML=getElementById(people));

const getListofnames = (people)=>{
    const names = people.map((people)=>`<l1>${people.name} ${people.eye_color}</l1>`
    .join("\n"));

    return `<ul>${names}</ul>

}