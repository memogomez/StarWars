let button      = document.querySelector('#button')
let name        = document.querySelector('#name')
let height      = document.querySelector('#height')
let mass        = document.querySelector('#mass')
let birthYear   = document.querySelector('#birth-year')
let button10    = document.querySelector('#button10')
let buttonname  = document.querySelector('#buttonname')



function getInfo(){
    let randomNumber = Math.floor((Math.random()* 88) + 1)
    let apiUrl = 'https://swapi.dev/api/people/' + randomNumber

    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateInfoWithError()
    })
}

function getTen(){
    let registers = 11;
    for(i=1; i<registers; i++){
        let apiUrl = 'https://swapi.dev/api/people/' + i
    
        axios.get(apiUrl).then(response => {
            updateInfo(response.data)
        }).catch(e => {
            updateInfoWithError()
        })
    }
}
function getName(){
    let apiUrl = 'https://swapi.dev/api/people/1'
    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
        console.log(response.data.name)
    }).catch(e => {
        updateInfoWithError()
    })
}

function updateInfo(data){
    name.innerText      = data.name
    height.innerText    = `Height: ${data.height}`
    mass.innerText      = `Mass: ${data.mass}`
    birthYear.innerText = `BirthYear: ${data.birth_year}`
}

function updateInfoWithError(data){
    name.innerText      = 'Esta persona no esta disponible'
    height.innerText    = ''
    mass.innerText      = ''
    birthYear.innerText = ''
}

button.addEventListener('click',getInfo)
button10.addEventListener('click', getTen)
buttonname.addEventListener('click', getName)
