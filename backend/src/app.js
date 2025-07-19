const express = require('express');

const plantaRoutes = require('./routes/plantaRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const historicoRoutes = require('./routes/historicoIrrigacaoRoutes');
const sensorUmidadeRoutes = require('./routes/sensorUmidadeRoutes');
const statusBombaRoutes = require('./routes/statusBombaRoutes');

const app = express();

app.use(express.json());
app.use('/plantas', plantaRoutes);
app.use('/sensores', sensorRoutes);
app.use('/historicos', historicoRoutes);
app.use('/leituras', sensorUmidadeRoutes);
app.use('/bomba-status', statusBombaRoutes);

module.exports = app;