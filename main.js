// Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma = (a, b) => a + b;

console.log(somma(2, 4));


// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (numero) => numero * numero;

// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(n1, n2, operatore) {
    return operatore(n1, n2);
}

eseguiOperazione(5, 3, somma);

// Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


/***********Arrow fuction************/
// const creaTimer = (tempo) => {
//     return () => {
//         setTimeout(() => {
//             console.log("Tempo scaduto!");
//         }, tempo);          
// }};

// const timer = creaTimer(2000);
// timer();


/************funzione dichiarativa*****************/
function creaTimer(tempo) {
    return () => {
        setTimeout(() => {
            console.log("Tempo scaduto!");
        }, tempo);
    }
};

const timer = creaTimer(4000);
timer();


// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
    const intervalId = setInterval(() => {
        console.log(messaggio);
    }, 1000);

    return intervalId;
};

const stopStampa = stampaOgniSecondo("Ciao, questo messaggio viene stampato ogni secondo!");

setTimeout(() => {
    clearInterval(stopStampa);
    console.log("Intervallo fermato!");
}, 5000);


// Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo) {
    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
    };
}

const contatore = creaContatoreAutomatico(1000);
contatore();



// Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const intervalId = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Intervallo fermato!");
    }, tempoStop);
};

eseguiEferma("Messaggio stampato ogni secondo", 1000, 10000);

// Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
    const intervalId = setInterval(() => {
        console.log(n);
        n = n - 1;  // oppure si può utilizzare: n-- 
        if (n < 0) {
            clearInterval(intervalId);
            console.log("Tempo scaduto!");
        }
    }
        , 1000);
};

contoAllaRovescia(5);


// Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function sequenzaOperazioni(operazioni, intervallo) {

    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione();
            if (index === operazioni.length - 1) {
                console.log("Tutte le operazioni sono state eseguite!");
            }
        }, intervallo * index);
    });
};

const operazioni = [
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
];
sequenzaOperazioni(operazioni, 2000);



// Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
