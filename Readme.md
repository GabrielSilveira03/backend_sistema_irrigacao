# Backend do Sistema de Irrigação

Este projeto é o backend de um Sistema de Irrigação desenvolvido em equipe para a disciplina de Tecnologias Web II, da Universidade Federal do Ceará, campus Sobral. O backend foi implementado utilizando Node.js, Express, Prisma ORM, Docker Compose e integrações inteligentes com sensores, dispositivos, além de inteligência artificial para análise dos dados.

---

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Integração com OpenAI](#integração-com-openai)
- [Informações Adicionais](#informações-adicionais)

---

## Funcionalidades

- Gerenciamento de usuários
- Controle de dispositivos de irrigação
- Integração com sensores e atuadores
- API para integração com o frontend
- Persistência dos dados utilizando ORM
- **Análise inteligente de dados dos sensores via IA (OpenAI)**
- **Diagnóstico automatizado da eficiência da irrigação usando Inteligência Artificial**

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para construção de APIs
- **Prisma**: ORM para gerenciamento do banco de dados
- **Docker Compose**: Gerenciamento de serviços em containers
- **OpenAI GPT API**: Integração para análises e recomendações baseadas em IA

---

## Como Executar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/GabrielSilveira03/backend_sistema_irrigacao.git
   cd backend_sistema_irrigacao/backend
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure o banco de dados**

   Edite os arquivos dentro de `prisma` para ajustar o acesso ao banco conforme necessário.

4. **Configuração da API OpenAI**

   Crie um arquivo `.env` na pasta `backend` e inclua sua chave de API do OpenAI:

   ```
   OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

   > A integração com OpenAI é necessária para funcionamento dos endpoints inteligentes descritos abaixo.

5. **Execute o projeto**

   Para rodar localmente:

   ```bash
   npm run start
   ```

   Ou utilizando Docker Compose:

   ```bash
   docker-compose up
   ```

---

## Estrutura de Pastas

```
backend/
│
├── .gitignore
├── package.json
├── prisma/           # Configurações e migrations do Prisma
├── src/              # Código fonte principal
│   ├── controllers/
│   ├── services/
│   └── routes/
├── scripts/          # Scripts de mock e populadores
```

- Veja a [docker-compose.yaml](https://github.com/GabrielSilveira03/backend_sistema_irrigacao/blob/main/docker-compose.yaml) na raiz do projeto para detalhes sobre execução com containers.

---

## Configuração do Banco de Dados

O gerenciamento do banco é feito usando Prisma ORM. Certifique-se de ajustar as configurações do banco em `backend/prisma` antes de rodar migrations ou inicializar o backend.

---

## Integração com OpenAI

O projeto conta com **dois endpoints principais de análise inteligente utilizando OpenAI GPT API** para auxiliar decisões de irrigação automáticas e recomendação agronômica:

### 1. **Análise de Dados do Sensor (`/sensor/analise`)**

- **Método:** `POST`
- **Descrição:** Envia dados do sensor (ex.: umidade, temperatura) para análise inteligente via IA.
- **Corpo da requisição (exemplo):**

  ```json
  {
    "umidade": 54,
    "temperatura": 28
  }
  ```

- **Retorno:** Recomendações e alertas gerados pela IA com base nos dados enviados.

### 2. **Diagnóstico de Eficiência da Irrigação por Planta (`/planta/:id/analisar-irrigacao`)**

- **Método:** `GET`
- **Descrição:** Avalia automaticamente, via IA, se a irrigação da planta está adequada considerando histórico, parâmetros ideais e leituras dos sensores.
- **Exemplo de chamada:**

  ```
  GET /planta/100/analisar-irrigacao
  ```

- **Retorno:** Relatório detalhado da eficiência da irrigação e sugestões de otimização.

**Observação:**  
Para utilizar esses endpoints, é obrigatório configurar uma chave OpenAI GPT nos parâmetros de ambiente (`.env`).  
Planos gratuitos possuem limite de requisições na OpenAI.

---

## Informações Adicionais

- Este backend foi desenvolvido como parte de um projeto acadêmico.
- Para dúvidas ou sugestões, abra uma issue no GitHub.
- Se deseja contribuir, faça um fork e envie um pull request.

---
Desenvolvido por Gabriel da Costa Silveira.