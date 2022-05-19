const { __esModule } = require("uuid");

const whitelist = [
    'https://www.miodominio.com',
    'http://localhost:3500',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Controllo CORS: non permesso'));
        }
    },
    optionSuccessStatus: 200

}

__esModule.exports = corsOptions;