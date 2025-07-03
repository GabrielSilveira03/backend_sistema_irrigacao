const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const listarPlantas = async () => {
    return await prisma.plantas.findMany({
        include: {
            sensores: true,
            historico_irrigacao: true,
        },
    });
};

const buscarPlantaPorId = async (id) => {
  const planta = await prisma.plantas.findUnique({
    where: { id },
    include: {
      sensores: true,
      historico_irrigacao: true,
    },
  });

  if (!planta) {
    throw new Error('Planta não encontrada');
  }

  return planta;
};

const adicionarPlanta = async ({
    nome,
    tipo,
    umidade_ideal,
    agua_por_dia,
    intervalo_irrigacao_horas,
    sensor_id,
    observacoes,
    }) => {
    // const sensor = await prisma.sensores.findUnique({
    //     where: { id: sensor_id },
    // });

    // if(!sensor) {
    //     throw new Error('Sensor não encontrado');
    // }

    return await prisma.plantas.create({
      data: {
        nome,
        tipo,
        umidade_ideal,
        agua_por_dia,
        intervalo_irrigacao_horas,
        sensor_id,
        observacoes,
      },
    });       
};

const atualizarPlanta = async (id,{
    nome,
    tipo,
    umidade_ideal,
    agua_por_dia,
    intervalo_irrigacao_horas,
    sensor_id,
    observacoes,
  }
) => {
  const plantaExistente = await prisma.plantas.findUnique({
    where: { id },
    include: {
      sensores: true,
      historico_irrigacao: true,
    },
  });

  if (!plantaExistente) {
    throw new Error("Planta não encontrada");
  }

  return await prisma.plantas.update({
    where: { id },
    data: {
      nome,
      tipo,
      umidade_ideal,
      agua_por_dia,
      intervalo_irrigacao_horas,
      sensor_id,
      observacoes,
    },
    include: {
      sensores: true,
      historico_irrigacao: true,
    },
  });
};

const excluirPlanta = async (id) => {
  const plantaExistente = await prisma.plantas.findUnique({ where: {id} });

  if (!plantaExistente) {
    throw new Error("Planta não encontrada");
  };

  await prisma.plantas.delete({
    where: { id },
  });

  return { message: "Planta excluída com sucesso" };
}

module.exports ={
    adicionarPlanta,
    listarPlantas,
    buscarPlantaPorId,
    atualizarPlanta,
    excluirPlanta,
};