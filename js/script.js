// // Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// chiedi all'utente il numero di kilometri che vuole percorrere

const kmNumber = parseInt(prompt("Quanti chilometri desidera percorrere?"));
console.log ("numero chilometri: ",kmNumber);

// chiedi all'utente la sua età

const userAge = parseInt(prompt("Inserire la propria età"))
console.log ("età user: ",userAge);


// calcola il prezzo iniziale del biglietto

let ticketStartingPrice = kmNumber * 0.21;
console.log ("ticketStartingPrice: ",ticketStartingPrice);


// clacola lo sconto in base all-età

let discount = 0;

if (userAge < 18){
    discount = ticketStartingPrice * 0.2;
} else if(userAge >= 65){
    discount = ticketStartingPrice * 0.4;
}

console.log("Sconto applicato: ", discount);

// calcolo il prezzo finale del biglietto

const ticketFinalPrice = ticketStartingPrice - discount;
const formattedPrice = ticketFinalPrice.toFixed(2);

console.log("Prezzo finale biglietto: €" + formattedPrice);

document.getElementById("my-id").innerHTML = "Prezzo finale biglietto: €" + formattedPrice;