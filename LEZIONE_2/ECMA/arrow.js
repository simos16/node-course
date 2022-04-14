//forma standard della funzione freccia
let myFunc = (a, b) => a + b;

//funzione standard

saluto = function() {
    return 'buongiorno';
}

//funzione freccia
saluto = () => {
    return 'ciao';
}

let ciao;
ciao = (val) => 'Ciao ' + val;

//senza parentesi
ciao = val => 'Ciao ' + val;

console.log(ciao('mario'));