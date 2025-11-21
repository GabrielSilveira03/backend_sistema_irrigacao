const plantaController = require('../controllers/plantaController');
const express = require('express');

const router = express.Router();

router.get('/contagem', plantaController.contagemPlantas);
router.get('/', plantaController.listarPlantas);
router.get('/:id', plantaController.buscarPlantaPorId);
router.post('/', plantaController.adicionarPlanta);
router.put('/:id', plantaController.atualizarPlanta);
router.delete('/:id', plantaController.excluirPlanta);
router.get('/:id/analisar-irrigacao', plantaController.analisarIrrigacaoPlanta);

module.exports = router;