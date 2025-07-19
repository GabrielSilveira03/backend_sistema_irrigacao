const express = require('express');
const router = express.Router();
const SensorUmidadeController = require('../controllers/sensorUmidadeController');

router.get('/', SensorUmidadeController.listarLeituras);
router.get('/:id', SensorUmidadeController.buscarLeituraPorId);
router.post('/', SensorUmidadeController.adicionarLeitura);

module.exports = router;