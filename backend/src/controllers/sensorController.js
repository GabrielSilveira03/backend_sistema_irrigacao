const Sensor = require('../services/sensorService');
const { analiseSensorData } = require('../services/iaService');

const listarSensores = async (req, res) => {
    try {
        const sensores = await Sensor.listarSensores();
        res.status(200).json(sensores);
    } catch (error) {
        console.error('Erro ao listar sensores:', error);
        res.status(500).json({ error: 'Erro ao listar sensores' });
    }
};

const buscarSensorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const sensor = await Sensor.buscarSensorPorId(Number(id));
        res.json(sensor);
    } catch (error) {
        console.error('Erro ao buscar sensor por id:', error);
        res.status(404).json({ error: 'Sensor não encontrado' });
    }
};

const adicionarSensor = async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        const novoSensor = await Sensor.adicionarSensor({ nome, descricao });
        res.status(201).json(novoSensor);
    } catch (error) {
        console.error('Erro ao adicionar sensor:', error);
        res.status(500).json({ error: 'Erro ao adicionar sensor' });
    }
};


const atualizarSensor = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        const sensorAtualizado = await Sensor.atualizarSensor(Number(id), dadosAtualizados);
        res.json(sensorAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar sensor:', error);
        res.status(500).json({ error: 'Erro ao atualizar sensor' });
    }
};

const deletarSensor = async (req, res) => {
    try {
        const { id } = req.params;
        await Sensor.deletarSensor(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar sensor:', error);
        res.status(500).json({ error: 'Erro ao deletar sensor' });
    }
};

const analisarDadosSensor = async (req, res) => {
     const sensorData = req.body; // Ex: { umidade: 45, temperatura: 28 }

  try {
    const aiFeedback = await analiseSensorData(sensorData);

    res.status(200).json({
      sensorData,
      aiFeedback
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao consultar IA", details: err.message });
  }
}

module.exports = {
    listarSensores,
    buscarSensorPorId,
    adicionarSensor,
    atualizarSensor,
    deletarSensor,
    analisarDadosSensor,
};