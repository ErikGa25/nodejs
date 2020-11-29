const http = require('http');
const fs   = require('fs')
const path = require('path');

let servidor = http.createServer(function(request, response) {
    let filePath = request.url;
    let contentType = '';
    
    if (filePath == '/') {
        filePath = '/public/views/index.html';
    }

    filePath = __dirname + filePath;
    fileExtension = path.extname(filePath);

    switch (fileExtension) {
        case ".css":
            contentType = "text/css";
            break;

        case ".js":
            contentType = "text/javascript";
            break;

        case ".html":
            contentType = "text/html";
            break;
    }

    fs.readFile(filePath, (error, content)=>{
        if(!error) {
            response.writeHead(200, {"Content-Type": contentType});
            response.write(content);
            response.end();
        } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write('Not Found 404');
            response.end();
        }
    });
});

servidor.listen(3000);