const EventEmitter = require('events');

function attivaEvento(Evento) {
    console.log('1) L\'evento sta per attivarsi...');
    const eventEmitter = new EventEmitter();


    process.nextTick(eventEmitter.emit.bind(eventEmitter, Evento));

    console.log(`2) Evento '${Evento}' emesso!!!`);
    console.log('\n==============================================\n');
    console.log('Elenco dei listener registrati per questo evento:\n');
    return eventEmitter;
}

const evento = 'demo evento';

const eventEmitter = attivaEvento(evento);

eventEmitter.on(evento, () => console.log('Listener 1'));
eventEmitter.on(evento, () => console.log('Listener 2'));