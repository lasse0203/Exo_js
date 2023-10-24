import Person from './Person.js'
import * as mesOpretaion from './operations.js'



const mainH =document.querySelector('main> h1')
const monPa =document.querySelector("p#cet-id")
const monBouton =document.querySelector("button")
const maListe =document.querySelector("#ma-liste")
let monCompteur = 1 


monBouton.addEventListener('click', () => {
    const unLI = document.createElement('li')
    const valeurCompteur =monCompteur++
    unLI.textContent = `Element n°${monCompteur++}`
})



setTimeout(() =>{
    monPa.textContent ="blabla"
},2000)

console.log(mainH)

monFormulaire = document.querySelector('form')
monFormulaire.addEventListener('submit', () => {
    const nvPerson = new Person('john','dupont')
    console.log(nvPerson);
})
