const HistoricoService = require('../services/historicoIrrigacaoService');

const listarHistoricos = async (req, res) => {
    try {
        const historicos = await HistoricoService.listarHistoricos();
        res.status(200).json(historicos);
    } catch (error) {
        console.error('Erro ao listar históricos:', error);
        res.status(500).json({ error: 'Erro ao listar históricos' });
    }
};

const buscarHistoricoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const historico = await HistoricoService.buscarHistoricoPorId(Number(id));

        if (!historico) {
            return res.status(404).json({ error: 'Histórico não encontrado' });
        }

        res.status(200).json(historico);
    } catch (error) {
        console.error('Erro ao buscar histórico:', error);
        res.status(500).json({ error: 'Erro ao buscar histórico' });
    }
};

const adicionarHistorico = async (req, res) => {
    try {
        const { planta_id, quantidade_agua, modo } = req.body;

        if (planta_id == null || quantidade_agua == null || modo == null) {
            return res.status(400).json({ error: 'quantidade_agua e modo são obrigatórios' });
        }

        const novoHistorico = await HistoricoService.adicionarHistorico({
            planta_id,
            quantidade_agua,
            modo,
        });

        res.status(201).json(novoHistorico);
    } catch (error) {
        console.error('Erro ao adicionar histórico:', error);
        res.status(500).json({ error: 'Erro ao adicionar histórico' });
    }
};

module.exports = {
    listarHistoricos,
    buscarHistoricoPorId,
    adicionarHistorico,
};