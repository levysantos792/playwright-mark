# Playwright Mark

Um projeto de gerenciador de tarefas (Task Manager) composto por uma API backend e uma interface web frontend, com testes automatizados usando Playwright.

## Estrutura do Projeto

- **apps/api/**: API backend desenvolvida com Node.js, Express e TypeORM, utilizando SQLite como banco de dados.
- **apps/web/**: Interface web simples servida por http-server.
- **tests/**: Testes end-to-end usando Playwright.

## Tecnologias Utilizadas

### Backend (API)
- Node.js
- Express
- TypeORM
- SQLite (better-sqlite3)
- Yup (validação)
- UUID
- CORS

### Frontend (Web)
- HTML/CSS/JavaScript
- http-server

### Testes
- Playwright

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd playwright-mark
   ```

2. Instale as dependências do projeto raiz (Playwright):
   ```
   npm install
   ```

3. Instale as dependências da API:
   ```
   cd apps/api
   npm install
   ```

4. Instale as dependências da web:
   ```
   cd ../web
   npm install
   cd ../..
   ```

## Configuração

### Banco de Dados
Na pasta `apps/api`, execute:
```
npm run db:init
```
Isso executará as migrações para criar o banco de dados SQLite.

## Execução

### Iniciar a API
```
cd apps/api
npm start
```
A API estará rodando em `http://localhost:3000` (ou conforme configurado).

### Iniciar a Web App
```
cd apps/web
npm start
```
A interface web estará disponível em `http://localhost:8080`.

## Testes

Para executar os testes com Playwright:
```
npx playwright test
```

Para visualizar o relatório dos testes:
```
npx playwright show-report
```

## Funcionalidades

- Criar, listar e gerenciar tarefas.
- Interface web simples para interação.
- API RESTful para operações CRUD nas tarefas.

## Autor

Fernando Papito

## Licença

MIT