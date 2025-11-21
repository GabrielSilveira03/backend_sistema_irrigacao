# Backend do Sistema de Irrigação

Este projeto é o backend de um Sistema de Irrigação desenvolvido em equipe para a disciplina de Tecnologias Web II, da Universidade Federal do Ceará, campus Sobral. O backend foi implementado utilizando JavaScript e diversas ferramentas modernas para garantir escalabilidade, segurança e integração eficiente.

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Informações Adicionais](#informações-adicionais)

## Funcionalidades

- Gerenciamento de usuários
- Controle de dispositivos de irrigação
- Integração com sensores e atuadores
- API para integração com o frontend
- Persistência dos dados utilizando ORM

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework para construção de APIs
- **Prisma**: ORM para gerenciamento do banco de dados
- **Docker Compose**: Gerenciamento de serviços em containers

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

4. **Execute o projeto**

   Para rodar localmente:

   ```bash
   npm run start
   ```

   Ou utilizando Docker Compose:

   ```bash
   docker-compose up
   ```

## Estrutura de Pastas

```
backend/
│
├── .gitignore
├── package.json
├── prisma/           # Configurações e migrations do Prisma
├── src/              # Código fonte principal
```

- Veja a [docker-compose.yaml](https://github.com/GabrielSilveira03/backend_sistema_irrigacao/blob/main/docker-compose.yaml) na raiz do projeto para detalhes sobre execução com containers.

## Configuração do Banco de Dados

O gerenciamento do banco é feito usando Prisma ORM. Certifique-se de ajustar as configurações do banco em `backend/prisma` antes de rodar migrations ou inicializar o backend.

## Informações Adicionais

- Este backend foi desenvolvido como parte de um projeto acadêmico.
- Para dúvidas ou sugestões, abra uma issue no GitHub.
- Se deseja contribuir, faça um fork e envie um pull request.

---
Desenvolvido por Gabriel da Costa Silveira.