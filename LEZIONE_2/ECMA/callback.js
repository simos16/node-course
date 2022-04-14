/*function display(valore) {
    console.log(valore);
}


function somma(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let risultato = somma(5, 5);
display(risultato);*/


//uso una callback
function display(valore) {
    console.log(valore);
}

function somma(num1, num2, myCallback) {
    let somma = num1 + num2;
    myCallback(somma);
}

somma(10, 10, display);