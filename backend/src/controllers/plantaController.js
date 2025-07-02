const Planta = require('../services/plantaService');

const adicionarPlanta = async (req, res) => {
    try {
        const {
            nome,
            tipo,
            umidade_ideal,
            agua_por_dia,
            intervalo_irrigacao_horas,
            sensor_id,
            // observacoes,
        } = req.body;

        if (!nome || !tipo || !umidade_ideal || !agua_por_dia || !intervalo_irrigacao_horas) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const planta = await Planta.adicionarPlanta({
            nome,
            tipo,
            umidade_ideal,
            agua_por_dia,
            intervalo_irrigacao_horas,
            sensor_id,
            // observacoes,
        });

        res.status(201).json(planta);
    } catch (error) {
        console.error('Erro ao adicionar planta:', error);
        res.status(500).json({ error: 'Erro ao adicionar planta' });
    }
}

module.exports ={
    adicionarPlanta,
};