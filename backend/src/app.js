const express = require('express');

const bodyParser = require('body-parser');
const plantaRoutes = require('./routes/plantaRoutes');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();

app.use(express.json());
app.use('/plantas', plantaRoutes);
app.use('/sensores', sensorRoutes);


module.exports = app;