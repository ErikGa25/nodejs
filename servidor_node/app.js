var http = require('http');

var servidor = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type' : 'text/html;charset=utf-8'});
    response.write('<h3>Aplicación Web con Node JS</h3>');
    console.log('Cargando contenido...');
    response.end();
});

servidor.listen(3000);