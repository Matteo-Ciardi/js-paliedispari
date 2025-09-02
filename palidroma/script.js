// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci una parola")

function checkPalindroma(userWord) {
    let revertedWord = userWord.split("").reverse().join("");

    if (userWord.toLowerCase() === revertedWord.toLowerCase()) {
        return "E' palindroma";
    }

    else {
        return "Non è palindroma";
    }

}

let result = checkPalindroma(userWord);

console.log(result);


