console.log('principi.js loaded');



let biciDaCorsa = [
    {
        nome:'Canyon Ultimate CF Slx 9.0',
        peso:6.7,
    },
    {
        nome:'Rose X-Lite Six Disc',
        peso:6.9,
    },
    {
        nome:'Sarto asola',
        peso:5.7,
    },
    {
        nome:'Colnago V2-R VJBR',
        peso:0.835,
    },
    {
        nome:'Scott Addict RC Premium Disc',
        peso:6.85,
    },
    {
        nome:'Time Alpe D’Huez 01',
        peso:6.2,
        },
    {
        nome:'Bianchi Specialissima',
        peso: 6.7,
    }
]

// riduco l'array in singoli oggetti
const bici = biciDaCorsa.map(bici => (bici))

//riporto il valore del peso in numero da stringa
const pesoNumber = biciDaCorsa.map(getNumbers);

function getNumbers (biciDaCorsa){
    return [parseFloat(biciDaCorsa.peso)].join(" ")
}

//pesco il numero più basso fra tutti, per verificare qual'è il più piccolo
let laPiuLeggera = Math.min(...pesoNumber)

//faccio il display dell'oggetto che contiene il valore "peso" più piccolo
const biciPiuLeggera = bici.filter(bici => {
    if(bici.peso == laPiuLeggera){       
        console.log("La bici più leggera è:",bici.nome,"con soli:",laPiuLeggera,"Kg")
    }
});