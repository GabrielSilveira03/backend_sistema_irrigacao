const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarSensores = async () => {
    return await prisma.sensores.findMany();
};

const buscarSensorPorId = async (id) => {
    return await prisma.sensores.findUnique({
        where: { id },
    });
};

const adicionarSensor = async (dadosSensor) => {
    return await prisma.sensores.create({
        data: dadosSensor,
    });
};

const atualizarSensor = async (id, dadosAtualizados) => {
    return await prisma.sensores.update({
        where: { id },
        data: dadosAtualizados,
    });
};

const deletarSensor = async (id) => {
    return await prisma.sensores.delete({
        where: { id },
    });
};

module.exports = {
    listarSensores,
    buscarSensorPorId,
    adicionarSensor,
    atualizarSensor,
    deletarSensor,
};