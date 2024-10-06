const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    PORT: process.env.PORT || 8082,
    ATLAS_DB_URL : process.env.ATLAS_DB_URL
}