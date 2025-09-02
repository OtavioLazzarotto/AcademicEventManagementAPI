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

---

## ⚙️ Configuração do Ambiente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-repo/backend.git
   cd backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`:**
   ```env
   PORT=3000
   DATABASE_URL=postgres://user:password@localhost:5432/nome_do_banco
   JWT_SECRET=sua_chave_secreta
   ```

4. **Rode as migrations:**
   ```bash
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
