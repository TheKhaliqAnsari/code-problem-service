const express = require('express');
const bodyParser = require('body-parser')
const { PORT } = require('./config/server.config');

const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const dbConnectionHandler = require('./config/dbConnectionHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text())




app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
    res.status(200).send({
        message: "Server is up"
    })
})



app.use(errorHandler);


app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error starting the server: ${error.message}`);
    }
    console.log(`Server is started on port ${PORT}`)
    dbConnectionHandler();
    console.log("Db connected successfully.")
})