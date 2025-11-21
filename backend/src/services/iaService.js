const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analiseSensorData(data) {
  const prompt = `
Esses são dados de um sensor de irrigação:
${JSON.stringify(data, null, 2)}

Analise esses dados e sugira recomendações para irrigação, possíveis alertas ou problemas detectados. Fale como um especialista em agricultura.`;

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "Você é um especialista em sistemas de irrigação agrícola." },
      { role: "user", content: prompt }
    ],
    model: "gpt-4o-mini", 
    max_tokens: 256,
    temperature: 0.7
  });

  return completion.choices[0].message.content;
}

async function analisarEficienciaIrrigacao(dadosPlanta) {
  const prompt = `
Você é um agrônomo especialista em irrigação.
Analise os dados abaixo de uma planta cultivada:
- Nome: ${dadosPlanta.nome}
- Tipo: ${dadosPlanta.tipo}
- Umidade ideal: ${dadosPlanta.umidade_ideal}
- Quantidade de água por dia recomendada: ${dadosPlanta.agua_por_dia} litros
- Intervalo de irrigação (em horas): ${dadosPlanta.intervalo_irrigacao_horas}

Histórico das últimas irrigações (quantidade, modo, data/hora) e últimos registros de umidade do solo:
${JSON.stringify({
  historico_irrigacao: dadosPlanta.historico_irrigacao,
  registro_umidade: dadosPlanta.registro_umidade,
}, null, 2)}

Com base nessas informações, responda:
1. As irrigações estão sendo feitas de modo eficiente?
2. Há excesso ou falta de água?
3. Alguma recomendação para otimizar o uso da água ou os parâmetros de irrigação?
4. Algum alerta sobre possíveis problemas de manejo?
Seja objetivo e didático.
`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Você é um especialista em sistemas de irrigação agrícola." },
      { role: "user", content: prompt }
    ],
    max_tokens: 350,
    temperature: 0.7,
  });
  return completion.choices[0].message.content;
}


module.exports = { 
  analiseSensorData,
  analisarEficienciaIrrigacao,
 };