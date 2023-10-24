/*
let monObjet={
    firstname:"toto",
    lastname:"tata"
}
console.log(monObjet);
console.log(monObjet.firstname);

// CLASS EN JAVAS
class Person {
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    direBonjour (){
        console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
    }
}
let ikhlasse = new Person("ikhlasse", "ammari")
ikhlasse.age = 30
console.log(ikhlasse)
console.log(ikhlasse['age'])
console.log(ikhlasse.age)
ikhlasse.direBonjour()

const rollDice =(diceValue) =>Math.ceil( Math.random()*diceValue)

*/

// Générer un nombre mystère aléatoire entre 1 et 100

const nmbrMystere = Math.floor(Math.random() * 100)+1 ;
let nmbrEssai = 0;

while (true) {
  const nmbrUtilisateur = +prompt("entrer  un nombre entre 1 et 100 :");
  const nmbrGuess = nmbrUtilisateur;
  nmbrEssai++;

  if (nmbrGuess === nmbrMystere) {
    alert("Bravo, tu as gangné en  " + nmbrEssai + " essais!");
    break;
  } else if (nmbrGuess < nmbrMystere) {
    alert("Trop petit");
  } else {
    alert("Trop grand");
  }
}




