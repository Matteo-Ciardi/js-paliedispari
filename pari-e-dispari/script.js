// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente scegie "Pari o dispari"
const oddOrEven = prompt("Scegli pari o dispari").toLowerCase();

// L'utente sceglie un numero da 1 a 5
const userInput = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log("Scelta utente: " + oddOrEven);
console.log("Numero scelto dall'utente: " + userInput);

// Funzione per generare un numero random da 1 a 5 compresi
const min = 1;
const max = 5;

function randomGenerator(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let generatedNumber = randomGenerator(min, max);
console.log("Numero scelto dal PC: " + generatedNumber);

let sumResult = userInput + generatedNumber;
console.log("Risultato della somma dei due valori: " + sumResult);

// Funzione per controllare se il numero è pari o dispari
function checkOddEven(sumResult) {
    let result;

    if (sumResult % 2 === 0) {
        result = "pari";
    }

    else {
        result = "dispari";
    }

    return result;
}

let resultFunction = checkOddEven(sumResult);
console.log("La somma è: " + resultFunction);

// Confronto del risultato
if (resultFunction === oddOrEven) {
    console.log("Complimenti! Hai vinto!")
}

else {
    console.log("Mi dispiace, ha vinto il PC");
}


