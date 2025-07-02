const plantaController = require('../controllers/plantaController');
const express = require('express');

const router = express.Router();

router.post('/', plantaController.adicionarPlanta);

module.exports = router;