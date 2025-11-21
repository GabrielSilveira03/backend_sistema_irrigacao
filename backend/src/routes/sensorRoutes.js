const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/', sensorController.listarSensores);
router.get('/:id', sensorController.buscarSensorPorId);
router.post('/analise', sensorController.analisarDadosSensor);
router.post('/', sensorController.adicionarSensor);
router.put('/:id', sensorController.atualizarSensor);
router.delete('/:id', sensorController.deletarSensor);

module.exports = router;