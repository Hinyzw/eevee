//configurar back end
//criar duas variaveis - consumir framework express e instancia
const express = require('express');
const app = express();

//rota para os arquivos estaticos
app.use(express.static('public'))

//qual porta irá rodar
app.listen(3000, () => {
    console.log(`Servidor rodando no link http://localhost:3000`)
})