let button      = document.querySelector('#button')
let name        = document.querySelector('#name')
let height      = document.querySelector('#height')
let mass        = document.querySelector('#mass')
let birthYear   = document.querySelector('#birth-year')



function getInfo(){
    let randomNumber = Math.floor((Math.random()* 88) + 1)
    let apiUrl = 'https://swapi.dev/api/people/' + randomNumber

    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
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

