const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarLeituras = async () => {
    return await prisma.sensor_umidade.findMany({
        include: { sensores: true }
    });
};

const buscarLeituraPorId = async (id) => {
    return await prisma.sensor_umidade.findUnique({
        where: { id },
        include: { sensores: true }
    });
};

const adicionarLeitura = async (dados) => {
    return await prisma.sensor_umidade.create({
        data: dados,
    });
};

module.exports = {
    listarLeituras,
    buscarLeituraPorId,
    adicionarLeitura,
};