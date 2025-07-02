const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const adicionarPlanta = async ({
    nome,
    tipo,
    umidade_ideal,
    agua_por_dia,
    intervalo_irrigacao_horas,
    sensor_id,
    // observacoes,
}) => {
    const sensor = await prisma.sensores.findUnique({
        where: { id: sensor_id },
    });

    if(!sensor) {
        throw new Error('Sensor não encontrado');
    }

    return await prisma.plantas.create({
      data: {
        nome,
        tipo,
        umidade_ideal,
        agua_por_dia,
        intervalo_irrigacao_horas,
        sensor_id,
        // observacoes,
      },
    });       
};

module.exports ={
    adicionarPlanta,
};