console.log('principi.js loaded');

// array con la lista degli invitati
let arrayInvitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] 


// stampo la lista degli invitati con aggiunta di tavolo e posto a sedere
let i= 1
const arrayConTavolo = arrayInvitati.map(invitato => ({invitato, tavolo: "Tavolo VIP", posto: i++}))
console.log(arrayConTavolo)

// stampo ogni invitato con il nome del suo tavolo e il posto a sedere
for (let j = 0; j<arrayConTavolo.length; j++){
    console.log(arrayConTavolo[j])
}