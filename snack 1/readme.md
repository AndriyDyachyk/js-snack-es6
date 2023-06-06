PROBLEMA:
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
"[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']  "
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.

SOLUZIONE:
1 - Creo un array con la lista degli invitati
2 - creo un nuovo array mediante .map che stampi in console il nome dell'ospite, al quale verrà aggiunta la costante tableName = Tavolo VIP,  e un numero di posto differente per ognuno
3 - stampare ogni invitato singolarmente in console