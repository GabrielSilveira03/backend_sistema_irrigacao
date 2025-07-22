const express = require('express');
const router = express.Router();
const HistoricoController = require('../controllers/historicoIrrigacaoController');

router.get('/', HistoricoController.listarHistoricos);
router.get('/:id', HistoricoController.buscarHistoricoPorId);
router.post('/', HistoricoController.adicionarHistorico);
router.get('/planta/:plantaId/agua/:data', HistoricoController.aguaPorPlantaNoDia);
router.get('/agua/:data', HistoricoController.aguaTotalNoDia);

module.exports = router;