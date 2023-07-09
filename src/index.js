const express = require('express');
const cors = require('cors');
require('dotenv').config();

require('./database');
const router = require('./router');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta:${PORT}`)
})
