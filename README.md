# Backend - Sistema de Inscrições em Eventos

Este é o backend do sistema de gerenciamento de **eventos e inscrições**, desenvolvido em **Node.js** com **TypeScript**, utilizando **Express**, **TypeORM**, **PostgreSQL** e **Tsyringe** para injeção de dependências.

---

## 🚀 Funcionalidades Implementadas

- **Autenticação e Autorização**
  - Login de usuários com **JWT** e **bcrypt**.
  - Middleware de autenticação.

- **Gerenciamento de Usuários**
  - Criação de usuários.

- **Gerenciamento de Eventos**
  - Criação de eventos.
  - Listagem de eventos.

- **Inscrições em Eventos**
  - Inscrição de usuários em eventos.
  - Listagem de inscrições por evento.

- **Validações**
  - Utilização do **Zod** para validar dados de entrada.

---

## 📂 Estrutura do Projeto

```bash
src/
├── common/
│   ├── infrastructure/
│   │   ├── http/               # Servidor Express
│   │   ├── typeorm/            # Configurações do TypeORM
│   │   │   ├── migrations/     # Migrations do banco
│   │   │   └── index.ts        # DataSource
│   └── containers/             # Injeção de dependências (Tsyringe)
│
├── modules/
│   ├── users/                  # Módulo de Usuários
│   ├── events/                 # Módulo de Eventos
│   └── subscriptions/          # Módulo de Inscrições
│
└── server.ts                   # Ponto de entrada da aplicação
```

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tsyringe](https://github.com/microsoft/tsyringe)
- [Zod](https://zod.dev/)
- [Docker](https://hub.docker.com/)

---

## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/OtavioLazzarotto/AcademicEventManagementAPI.git
   cd backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env` na raiz da pasta backend**
   ```env

      PORT=3000

      #MY_SECRET
      MY_SECRET=Suachavesecreta
      JWT_EXPIRES_IN=1d

      #URL API
      API_URL=http://localhost:3000


      #DATABASE
      DB_TYPE=postgres
      DB_HOST=localhost
      DB_PORT=5432
      DB_SCHEMA=public
      DB_NAME=nome_do_banco
      DB_USER=seu_usuario
      DB_PASS=sua_senha
   ```

4. **Rode as migrations:**
   ```bash
   npm run typeorm:generate
   npm run typeorm:migrate
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 📌 Scripts Disponíveis

- `npm run dev` → Inicia o servidor em modo desenvolvimento.
- `npm run typeorm` → Executa o CLI do TypeORM.
- `npm run typeorm:generate` → Gera migration a partir das entidades.
- `npm run typeorm:migrate` → Executa as migrations.

---
