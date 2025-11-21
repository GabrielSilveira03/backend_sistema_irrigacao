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

const contagemPlantas = async () => {
  const total = await prisma.plantas.count();
  return total; 
}

const adicionarPlanta = async ({
    nome,
    tipo,
    umidade_ideal,
    agua_por_dia,
    intervalo_irrigacao_horas,
    sensor_id,
    observacoes,
    }) => {

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

const dadosParaAnaliseEficiencia = async (planta_id) => {
  // Busca planta e seus dados de irrigação e sensores
  const planta = await prisma.plantas.findUnique({
    where: { id: planta_id },
    include: {
      historico_irrigacao: { orderBy: { data_hora: 'desc' }, take: 10 },
      sensores: {
        include: { 
          sensor_umidade: { orderBy: { data_hora: 'desc' }, take: 10 } 
        }
      }
    }
  });

  if (!planta) {
    throw new Error('Planta não encontrada');
  }

  return {
    nome: planta.nome,
    tipo: planta.tipo,
    umidade_ideal: planta.umidade_ideal,
    agua_por_dia: planta.agua_por_dia,
    intervalo_irrigacao_horas: planta.intervalo_irrigacao_horas,
    historico_irrigacao: planta.historico_irrigacao,
    registro_umidade: (planta.sensores && planta.sensores.sensor_umidade) ? planta.sensores.sensor_umidade : [],
  };
};

module.exports ={
    adicionarPlanta,
    listarPlantas,
    contagemPlantas,
    buscarPlantaPorId,
    atualizarPlanta,
    excluirPlanta,
    dadosParaAnaliseEficiencia,
};