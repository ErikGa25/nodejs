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
    password : '',
    database : 'node20_mysql'
});

connection.connect(error => {
    if(error) throw error;
    console.log('DB funcionando ...');
});

// Rutas de la API
// inicio
app.get('/', (request, response) => {
    response.send('Bienvenido al API de Node JS');
});

// listar todos los registros
app.get('/all', (request, response) => {
    response.send('Todos');
});

// listar un registro
app.get('/one/:id', (request, response) => {
    response.send('Uno');
});

// agregar un registro
app.post('/add', (request, response) => {
    response.send('Agregar');
});

// actualizar un registro
app.put('/update/:id', (request, response) => {
    response.send('Actualizar');
});

// eliminar un registro
app.delete('/delete/:id', (request, response) => {
    response.send('Eliminar');
});

app.listen(PORT, () => console.log('Servidor iniciado ....'));