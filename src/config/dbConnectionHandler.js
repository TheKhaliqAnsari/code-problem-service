const mongoose = require('mongoose');


async function dbConnectionHandler() {
    try{
        await mongoose.connect(process.env.ATLAS_DB_URL);
    }catch(error){
        console.log("Error: ", error);
    }
}

module.exports = dbConnectionHandler;