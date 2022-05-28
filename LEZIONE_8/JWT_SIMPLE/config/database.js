const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        })
        .then(() => {
            console.log('Database connesso');
        })
        .catch((error) => {
            console.log('Database non connesso');
            console.error(error);
        });
}