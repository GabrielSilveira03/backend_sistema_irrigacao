const express = require('express');

const bodyParser = require('body-parser');
const plantaRoutes = require('./routes/plantaRoutes');

const app = express();

app.use(bodyParser.json());

app.use(express.json());
app.use('/planta', plantaRoutes);


module.exports = app;