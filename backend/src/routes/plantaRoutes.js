const plantaController = require('../controllers/plantaController');
const express = require('express');

const router = express.Router();

router.get('/', plantaController.listarPlantas);
router.get('/:id', plantaController.buscarPlantaPorId);
router.get('/contagem', plantaController.contagemPlantas);
router.post('/', plantaController.adicionarPlanta);
router.put('/:id', plantaController.atualizarPlanta);
router.delete('/:id', plantaController.excluirPlanta);

module.exports = router;