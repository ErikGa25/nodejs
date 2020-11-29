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
    let sql = 'SELECT * FROM usuarios';

    connection.query(sql, (error, results) => {
        let total = results.length;    
        
        if(error) throw error;
    
        if(total > 0){
            response.json(results);
        } else {
            response.send('No hay registros.');
        }
    });
});

// listar un registro
app.get('/one/:id', (request, response) => {
    let {id} = request.params;
    let sql = 'SELECT * FROM usuarios WHERE id = ' + id;

    connection.query(sql, (error, results) => {
        let total = results.length;    
        
        if(error) throw error;
    
        if(total > 0){
            response.json(results);
        } else {
            response.send('No hay registros.');
        }
    });
});

// agregar un registro
app.post('/add', (request, response) => {
    let sql = 'INSERT INTO usuarios SET ?';
    let usuariosObj = {
        nombre : request.body.nombre,
        ciudad : request.body.ciudad
    };

    connection.query(sql, usuariosObj, error => {
        if(error) throw error;
        response.send('Se creo el usuario.');
    });
});

// actualizar un registro
app.put('/update/:id', (request, response) => {
    let {id} = request.params;
    let {nombre, ciudad} = request.body;
    let sql = `UPDATE usuarios SET nombre = '${nombre}', ciudad = '${ciudad}' WHERE id = ${id}`;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        response.send('Se actualizó el usuario.');
    });
});

// eliminar un registro
app.delete('/delete/:id', (request, response) => {
    let { id } = request.params;
    let sql = `DELETE FROM usuarios WHERE id = ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        response.send('Se elimino el usuario.');
    });
});

app.listen(PORT, () => console.log('Servidor iniciado ....'));