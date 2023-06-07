console.log('principi.js loaded');



let squadre = [
    {
        nome:"Atalanta",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Bologna",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Cremonese",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Empoli",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Fiorentina",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Hellas Verona",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Inter",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Juventus",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Lazio",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Lecce",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Milan",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Monza",
        golSegnati:0,
        falliSubiti:0
    },
    {
        nome:"Napoli",
        golSegnati:0,
        falliSubiti:0
    }
]

// creiamo un valore randomico per golSegnati e falliSubiti
squadre.forEach(squadra => squadra.golSegnati = (Math.random() * (10 - 0) + 0).toFixed(0))
squadre.forEach(squadra => squadra.falliSubiti = (Math.random() * (20 - 0) + 0).toFixed(0))


//creiamo il tabellone con solo nomi delle squadre e quanti falli hanno subito
const tabellone = squadre.forEach(squadra => {console.log("La squadra:",squadra.nome,"ha subito un totale di:",squadra.falliSubiti,"da inizio campionato")});