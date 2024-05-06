const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const knightsRouter = require('./domain/knights/routes');

const knightsController = require('./domain/knights/controllers/knightsController');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors({}));

app.use(session({
    secret: 'd1f7c77789a2c03717dca3e135118d49ff521d90',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
  
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100
}));

app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});

connectDB();

app.use(knightsRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
