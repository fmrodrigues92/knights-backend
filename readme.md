# Projeto Node.js com Docker

Este é um exemplo de projeto Node.js com Docker.

## Configuração

1. Clone este repositório:

```bash
git clone https://github.com/fmrodrigues92/knights-backend
cd knights-backend
```

2. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente, se necessário.

3. Execute o seguinte comando para construir os contêineres Docker e iniciar a aplicação:

```bash
docker-compose up --build
```

Isso irá criar e iniciar os contêineres Docker para o servidor Node.js e o banco de dados MongoDB.

## Acesso à Aplicação

A aplicação estará disponível em `http://localhost:3000`.

...
