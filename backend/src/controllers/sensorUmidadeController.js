const SensorUmidadeService = require('../services/sensorUmidadeService');

const listarLeituras = async (req, res) => {
    try {
        const leituras = await SensorUmidadeService.listarLeituras();
        res.status(200).json(leituras);
    } catch (error) {
        console.error('Erro ao listar leituras de umidade:', error);
        res.status(500).json({ error: 'Erro ao listar leituras de umidade' });
    }
};

const buscarLeituraPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const leitura = await SensorUmidadeService.buscarLeituraPorId(Number(id));

        if (!leitura) {
            return res.status(404).json({ error: 'Leitura não encontrada' });
        }

        res.status(200).json(leitura);
    } catch (error) {
        console.error('Erro ao buscar leitura:', error);
        res.status(500).json({ error: 'Erro ao buscar leitura' });
    }
};

const adicionarLeitura = async (req, res) => {
    try {
        const { sensor_id, valor_umidade } = req.body;

        if (valor_umidade == null) {
            return res.status(400).json({ error: 'valor_umidade é obrigatório' });
        }

        const novaLeitura = await SensorUmidadeService.adicionarLeitura({
            sensor_id,
            valor_umidade,
        });

        res.status(201).json(novaLeitura);
    } catch (error) {
        console.error('Erro ao adicionar leitura:', error);
        res.status(500).json({ error: 'Erro ao adicionar leitura de umidade' });
    }
};

module.exports = {
    listarLeituras,
    buscarLeituraPorId,
    adicionarLeitura,
};