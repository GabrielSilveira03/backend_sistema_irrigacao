const express = require('express');
const router = express.Router();
const StatusBombaController = require('../controllers/statusBombaController');

router.get('/', StatusBombaController.listarStatus);
router.get('/:id', StatusBombaController.buscarStatusPorId);
router.post('/', StatusBombaController.registrarStatus);

module.exports = router;