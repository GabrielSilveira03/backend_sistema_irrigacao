const Planta = require('../services/plantaService');

const listarPlantas = async (req, res) => {
    try {
        const plantas = await Planta.listarPlantas();
        res.status(200).json(plantas);
    } catch (error) {
        console.error('Erro ao listar plantas:', error);
        res.status(500).json({ error: 'Erro ao listar plantas' });
    }
}

const buscarPlantaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const planta = await Planta.buscarPlantaPorId(Number(id));
        res.json(planta);
    } catch (error) {
        console.error('Erro ao listar plantas:', error);
        res.status(404).json({ error: 'Erro ao buscar Planta por Id' });
    }
}

const contagemPlantas = async (req, res) => {
    try {
        const total = await Planta.contagemPlantas();
        res.status(200).json({ quantidade: total });
    } catch (error) {
        console.error('Erro ao contabilizar o total de plantas:', error);
        res.status(500).json({ error: 'Erro ao contabilizar o total de plantas' });
    }
}

const adicionarPlanta = async (req, res) => {
    try {
        const {
            nome,
            tipo,
            umidade_ideal,
            agua_por_dia,
            intervalo_irrigacao_horas,
            sensor_id,
            observacoes,
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
            observacoes,
        });

        res.status(201).json(planta);
    } catch (error) {
        console.error('Erro ao adicionar planta:', error);
        res.status(500).json({ error: 'Erro ao adicionar planta' });
    }
};

const atualizarPlanta = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nome,
            tipo,
            umidade_ideal,
            agua_por_dia,
            intervalo_irrigacao_horas,
            sensor_id,
            observacoes,
        } = req.body;

        const plantaExistente = await Planta.buscarPlantaPorId(Number(id));

        if (!plantaExistente) {
            return res.status(404).json({ error: 'Planta não encontrada' });
        }

        if (!nome || !tipo || !umidade_ideal || !agua_por_dia || !intervalo_irrigacao_horas) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const plantaAtualizada = await Planta.atualizarPlanta(Number(id), {
            nome,
            tipo,
            umidade_ideal,
            agua_por_dia,
            intervalo_irrigacao_horas,
            sensor_id,
            observacoes,
        });

        res.json(plantaAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar planta:', error);
        res.status(500).json({ error: 'Erro ao atualizar planta' });
    }
};


const excluirPlanta = async (req, res) => {
    try {
        const { id } = req.params;
        await Planta.excluirPlanta(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao excluir planta:', error);
        res.status(500).json({ error: 'Erro ao excluir planta' });
    }
}

module.exports ={
    adicionarPlanta,
    listarPlantas,
    contagemPlantas,
    buscarPlantaPorId,
    atualizarPlanta,
    excluirPlanta,
};