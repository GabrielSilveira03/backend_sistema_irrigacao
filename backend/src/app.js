const express = require('express');

const bodyParser = require('body-parser');
const plantaRoutes = require('./routes/plantaRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const historicoRoutes = require('./routes/historicoIrrigacaoRoutes');
const sensorUmidadeRoutes = require('./routes/sensorUmidadeRoutes');

const app = express();

app.use(express.json());
app.use('/plantas', plantaRoutes);
app.use('/sensores', sensorRoutes);
app.use('/historicos', historicoRoutes);
app.use('/leituras', sensorUmidadeRoutes);


module.exports = app;