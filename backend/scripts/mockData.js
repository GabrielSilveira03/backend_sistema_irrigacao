require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Sensores
  const sensorA = await prisma.sensores.upsert({
    where: { id: 10 },
    update: {},
    create: { id: 10, nome: 'Sensor Teste A', descricao: 'Sensor mock solo A' }
  });
  const sensorB = await prisma.sensores.upsert({
    where: { id: 11 },
    update: {},
    create: { id: 11, nome: 'Sensor Teste B', descricao: 'Sensor mock solo B' }
  });

  // Plantas
  const plantaA = await prisma.plantas.upsert({
    where: { id: 100 },
    update: {},
    create: {
      id: 100,
      nome: 'Alface',
      tipo: 'Hortaliça',
      umidade_ideal: 55,
      agua_por_dia: 1.3,
      intervalo_irrigacao_horas: 8,
      sensor_id: sensorA.id,
      observacoes: 'Precisa de umidade constante.'
    }
  });
  const plantaB = await prisma.plantas.upsert({
    where: { id: 101 },
    update: {},
    create: {
      id: 101,
      nome: 'Cebolinha',
      tipo: 'Hortaliça',
      umidade_ideal: 50,
      agua_por_dia: 1.0,
      intervalo_irrigacao_horas: 10,
      sensor_id: sensorB.id,
      observacoes: null
    }
  });

  // Histórico irrigação
  await prisma.historico_irrigacao.createMany({
    data: [
      {planta_id: plantaA.id, quantidade_agua: 1.3, modo: true, data_hora: new Date('2025-11-21T08:00:00Z')},
      {planta_id: plantaA.id, quantidade_agua: 1.5, modo: false, data_hora: new Date('2025-11-20T08:00:00Z')},
      {planta_id: plantaB.id, quantidade_agua: 1.0, modo: true, data_hora: new Date('2025-11-21T09:00:00Z')},
      {planta_id: plantaB.id, quantidade_agua: 1.2, modo: false, data_hora: new Date('2025-11-20T09:00:00Z')},
    ]
  });

  // Leituras sensor_umidade
  await prisma.sensor_umidade.createMany({
    data: [
      {sensor_id: sensorA.id, valor_umidade: 49, data_hora: new Date('2025-11-21T08:01:00Z')},
      {sensor_id: sensorA.id, valor_umidade: 54, data_hora: new Date('2025-11-20T08:01:00Z')},
      {sensor_id: sensorB.id, valor_umidade: 52, data_hora: new Date('2025-11-21T09:01:00Z')},
      {sensor_id: sensorB.id, valor_umidade: 46, data_hora: new Date('2025-11-20T09:01:00Z')},
    ]
  });

  // Status bomba
  await prisma.status_bomba.createMany({
    data: [
      {status: true, atualizado_em: new Date('2025-11-21T08:00:30Z')},
      {status: false, atualizado_em: new Date('2025-11-21T09:00:30Z')},
    ]
  });

  console.log("Mock inserido com sucesso!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });