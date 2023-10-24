import Person from './Person.js'


const monFormulaire = document.querySelector('form')
const firstnameInput = document.querySelector('input#firstname')
const lastnameInput = document.querySelector('input#lastname')
const emailInput = document.querySelector('input#email')
const passwordInput = document.querySelector('input#password')
const userCountDisplay = document.querySelector('#userCount')

const users = [] 
let userCount = 0 

monFormulaire.addEventListener('submit', (event) => {
    event.preventDefault()
    const nouvellePersonne = new Person(
        firstnameInput.value,
        lastnameInput.value,
        emailInput.value,
        passwordInput.value
    )

    users.push(nouvellePersonne) 
    userCount += 1 

    userCountDisplay.textContent = `Nombre d'utilisateurs : ${userCount}` 

    console.log(users); 
})


        