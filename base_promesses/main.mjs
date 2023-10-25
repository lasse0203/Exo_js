/*const faitDansXSecondes =(seconds,quoiFaire) => {
    setTimeout(quoiFaire, seconds*1000)
}

document.querySelector('button').addEventListener('click', ()=> {
    console.log("du code avant");

    faitDansXSecondes (4,() =>{
        maVariable ="toto"
    
        faitDansXSecondes(2,() =>{
            maVariable +=" et titi"
            document.querySelector('span').textContent = maVariable
        })
    })
})
*/

const maPromesses = new Promise((res, rej) => {

        // du code plus ou moins long

        if(Math.random() >= 0.5){
            res("c'est bon")
        }else{
            rej("c'est pas bon")
        }

})
console.log(maPromesses);

const maFonctionAsynchrone =(seconds) =>{

    return new Promise((res , rej) => {
        setTimeout(() => {
            res("titi")
        }, seconds *1000);
    })
}
console.log("avant")
 maFonctionAsynchrone(2)
 .then(result => console.log(result))
 .then(error => console.log(error))
console.log("apres")




async function maFunction(){
    console.log("avant")
    const result =result => await maFonctionAsynchrone(2)
    console.log("apres")
}
