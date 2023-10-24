console.log("bonjour");
console.log("je suis une phrase ")
// console.log('je suis pas just char')

var maVariable = 25
maVariable ="blabla"
console.log (maVariable);

maVariable2 = "hole";
const Ma_CONSTANTE ="truc";

/* scanner on javaJS :
    alert(message): pour afficher un message
    */ 


/*alert("msg d'alert") 
let maValeur = confirm("etes vous sur ");
alert("vous avez choisi" + maValeur);
let monPrenom = prompt("quel est votre prénom ?")
alert("Bonjour" + monPrenom)

let nombreA = 25
let nombreB =10
console.log(nombreA + nombreB) 
console.log(nombreA ** nombreB) // puissance 

console.log(25 ==='25'); //Egalité avec typage
console.log(25 !== '25'); // Difference avec typage

console.log(!(25>18))
console.log(!true);
 let sonAge = 25
 let leTexte = sonAge>=21 ? 'usa' : sonAge>= 18? 'France' :'nulle part'

 console.log('il est majeur en ' + leTexte);

 // le si-null (null coarsing operateur)

 let maVariableTest = 25
 //let maValeur = maVariableTest ?? 'truc'
 //console.log(maValeur);

 let monTexte 
 console.log(monTexte?.toUpperCase()); // pour se proteger contre le null


 // structures de contreole

 let unAge = 25
 if (unAga>= 21){
    console.log("il est majeur en USA")
 }else if(unAge>=18){
    console.log("il est majeur en France")
 }else{
    console.log("il est majeur en France")
 }


for (let i =0;i<10;i++){
    console.log(i+"ieme itération");
}

let monNom =""

do{
    prompt ("veuiller enter votre nom :")

}while(monNom =="")

let monNombre =0
while(monNombre<=0){
    monNombre = prompt("msg")
}

// For ...OF 
const MON_TEXT="abcd"
for (const lettre of MON_TEXT){
    console.log(lettre)
}
let monTab = [1,"labla",true,[1,2,3]]

for (const element of monTab){
    console.log(element)
}

//ajout en fin d'array 

monTab.push("nouvel element")

//ajout en debut d'array 

monTab.unshift("first element")

// retrait en fin 
monTab.pop()

// retrait en debut 

monTab.shift()

let tabA =[1,2,3]
let tabB=[4,5,6]

let result = [...tabA, ...tabB] // [1,2,3,4,5,6]
let autreTab = [ ...result, 7,8,9 ]

let [premier,second,...leReste] = autreTab


let varA =25
let varB =12

[varA, varB]=[varB,varA] // inverser les valeurs sans 3 eme var
*/
// les fonctions :

function addition (nbA,nbB){
    return nbA+nbB
}
console.log(addition(1,2))


function sansPram(){
    console.log("sans params");
}

const mesPrenoms=["albert","bernard","chloée"]

function findNameStartWithB(prenom){
    return prenom.startsWith("b")
}

console.log(mesPrenoms.find((prenom) => prenom.startsWith("b")));

