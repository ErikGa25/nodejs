let http = require('http');
let fs   = require('fs')
let path = require('path');

let servidor = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type' : 'text/html'});
    response.write('<h3>Aplicación Web con Node JS</h3>');
    console.log('Cargando contenido...');
    response.end();
});

servidor.listen(3000);