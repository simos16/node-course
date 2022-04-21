/*PROMISES
STATI DELLA PROMISES

Pending....
Fulfilled => compimento
Rejected  => fallimento

let promise = new Promise(function(successo, fallimento){
successo(); => richiesta assolta
fallimento(); => richiesta rifiutata

});
.then

promise.then(
function(valore) {  ok },
 function(errore) { errore } );
*/


//ESEMPI

function display(valore) {
    console.log(valore);
}

let promise = new Promise(function(resolve, reject) {
    let x = 4;

    if (x == 0) {
        resolve("OK");
    } else {
        reject("Error");
    }
});

promise.then(
    function(valore) { display(valore); },
    function(error) { display(error); }
);

//senza promises
/*setTimeout(function() { myFunction("Buonasera"); }, 3000);

function myFunction(value) {
   console.log(value);
}*/

let promise1 = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Buongiorno"); }, 3000);
});

promise1.then(function(value) {
    console.log(value);
});

//la keyword async mi ritorna una promise
async function myFunction() {
    return "Ciao";
}
console.log(myFunction());
//La stessa cosa
/*function myFunction() {
    return Promise.resolve("Ciao");
}*/

async function display1() {
    let promise2 = new Promise(function(resolve, reject) {
        resolve("salve  a tutti !!");
    });
    console.log(await promise2);
}

console.log(display1());