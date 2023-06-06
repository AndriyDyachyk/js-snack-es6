PROBLEMA:
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

SOLUZIONE:
1 - creare un elemento nel dom nel quale stampare la lista degli studenti
2 - recuperare dal dom l'elemento nel quale andare a stampare la lista
3 - creare un element li contenente il la key "nome" dello studente e farla apparire tutta in maiuscolo con toUpperCase()
4 - Eseguire lo stesso procedimento con però un filter sull'array che verifichi il degli studenti > 70
5 - Ripetere il punto precedente però aggiungendo la condizione con && id> 120