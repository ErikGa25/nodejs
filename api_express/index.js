const express    = require('express');
const mysql      = require('mysql');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3500;
const app = express();

app.use(bodyParser.json());

// Conexión a MySQL
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 't1erik6',
    database : 'node20_mysql'
});

connection.connect(error => {
    if(error) throw error;
    console.log('DB funcionando ...');
});

app.listen(PORT, () => console.log('Servidor iniciado ....'));