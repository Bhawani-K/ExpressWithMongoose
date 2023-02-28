const mongoose = require("mongoose");

/**
 * .connect() connects to the database and used Promise to check if connection is successful.
**/
const connectToDB = async () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/Crud_MEAN')
        .then((conn) => {
            console.log(`DB Connected at: ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log(err.message);
            process.exit(1);
        });
};

module.exports = connectToDB;
