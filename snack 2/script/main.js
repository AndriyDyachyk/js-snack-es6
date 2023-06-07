console.log('principi.js loaded');



let listaStudenti = [
    {
    id:'213',
    nome: 'Marco della Rovere',
    voto: '78'},
    {
    id:'110',
    nome: 'Paola Cortellesa',
    voto: '96'},
    {
    id:'250',
    nome: 'Andrea Mantegna',
    voto: '48'},
    {
    id:'145',
    nome: 'Gaia Borromini',
    voto: '74'},
    {
    id:'196',
    nome: 'Luigi Grimaldello',
    voto: '68'},
    {
    id:'102',
    nome: 'Piero della Francesca',
    voto: '50'},
    {
    id:'120',
    nome: 'Francesca da Polenta',
    voto: '84'}
]


// creo la lista degli studenti
let lista1 = listaStudenti.forEach(studente =>{
    let listaCaps = document.getElementById('lista_completa')
    let indiceLista1 = document.createElement('li');
    indiceLista1.innerText = (studente.nome).toUpperCase()
    listaCaps.append(indiceLista1)
})

let lista2 = listaStudenti.forEach(studente =>{
    if(studente.voto>70){
        let listaOver70 = document.getElementById('lista_over70')
        let indiceLista2 = document.createElement('tr');
        indiceLista2.innerHTML = `<td>${(studente.nome).toUpperCase()}</td><td>${studente.voto}</td>`
        listaOver70.append(indiceLista2)
    }
})

let lista3 = listaStudenti.forEach(studente =>{
    if(studente.voto>70 && studente.id>120){
        let listaOver70Over120 = document.getElementById('lista_over70_over120')
        let indiceLista3 = document.createElement('tr');
        indiceLista3.innerHTML = `<td>${studente.id}</td><td>${(studente.nome).toUpperCase()}</td><td>${studente.voto}</td>`
        listaOver70Over120.append(indiceLista3)
    }
})
