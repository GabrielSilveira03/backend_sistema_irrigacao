const StatusBombaService = require('../services/statusBombaService');

const listarStatus = async (req, res) => {
    try {
        const status = await StatusBombaService.listarStatus();
        res.status(200).json(status);
    } catch (error) {
        console.error('Erro ao listar status da bomba:', error);
        res.status(500).json({ error: 'Erro ao listar status da bomba' });
    }
};

const buscarStatusPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const status = await StatusBombaService.buscarStatusPorId(Number(id));

        if (!status) {
            return res.status(404).json({ error: 'Status não encontrado' });
        }

        res.status(200).json(status);
    } catch (error) {
        console.error('Erro ao buscar status da bomba:', error);
        res.status(500).json({ error: 'Erro ao buscar status da bomba' });
    }
};

const registrarStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (typeof status !== 'boolean') {
            return res.status(400).json({ error: 'status deve ser booleano (true ou false)' });
        }

        const novoStatus = await StatusBombaService.registrarStatus(status);
        res.status(201).json(novoStatus);
    } catch (error) {
        console.error('Erro ao registrar status da bomba:', error);
        res.status(500).json({ error: 'Erro ao registrar status da bomba' });
    }
};

module.exports = {
    listarStatus,
    buscarStatusPorId,
    registrarStatus,
};