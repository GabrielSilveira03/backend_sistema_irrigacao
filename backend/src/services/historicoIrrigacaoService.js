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
    if (dados.planta_id) {
        const planta = await prisma.plantas.findUnique({ where: { id: dados.planta_id } });
        if (!planta) throw new Error("Planta não encontrada");
    }

    return await prisma.historico_irrigacao.create({
        data: dados,
    });
};

const aguaPorPlantaNoDia = async (plantaId, data) => {
  const inicio = new Date(data + 'T00:00:00');
  const fim = new Date(data + 'T23:59:59.999');
  const total = await prisma.historico_irrigacao.aggregate({
    _sum: { quantidade_agua: true },
    where: {
      planta_id: Number(plantaId),
      data_hora: { gte: inicio, lte: fim },
    },
  });
  return total._sum.quantidade_agua ?? 0;
};

const aguaTotalNoDia = async (data) => {
  const inicio = new Date(data + 'T00:00:00');
  const fim = new Date(data + 'T23:59:59.999');
  const total = await prisma.historico_irrigacao.aggregate({
    _sum: { quantidade_agua: true },
    where: {
      data_hora: { gte: inicio, lte: fim },
    },
  });
  return total._sum.quantidade_agua ?? 0;
};

module.exports = {
    listarHistoricos,
    buscarHistoricoPorId,
    adicionarHistorico,
    aguaPorPlantaNoDia,
    aguaTotalNoDia
};