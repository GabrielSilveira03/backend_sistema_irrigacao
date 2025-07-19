const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarStatus = async () => {
    return await prisma.status_bomba.findMany();
};

const buscarStatusPorId = async (id) => {
    return await prisma.status_bomba.findUnique({
        where: { id },
    });
};

const registrarStatus = async (status) => {
    return await prisma.status_bomba.create({
        data: { status },
    });
};

module.exports = {
    listarStatus,
    buscarStatusPorId,
    registrarStatus,
};