const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarHistoricos = async () => {
    return await prisma.historico_irrigacao.findMany({
        include: { plantas: true }
    });
};

const buscarHistoricoPorId = async (id) => {
    return await prisma.historico_irrigacao.findUnique({
        where: { id },
        include: { plantas: true }
    });
};

const adicionarHistorico = async (dados) => {
    return await prisma.historico_irrigacao.create({
        data: dados,
    });
};

module.exports = {
    listarHistoricos,
    buscarHistoricoPorId,
    adicionarHistorico,
};