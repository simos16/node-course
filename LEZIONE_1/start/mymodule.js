let sayHello = function() {
    console.log('Ciao');
}

let bye = function() {
    console.log('Arrivederci');
}


//modalità di esportazione con exports
exports.sayHello = sayHello;
exports.bye = bye;