// ...existing code...
import 'dotenv/config'; // opcional: carrega .env se usar dotenv
import OpenAI from "openai";
// ...existing code...
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
// ...existing code...
const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);