const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Servidor funcionando!');
});

server.PORT = 3000;
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Servidor funcionando!');
});

server.PORT = 3000;
server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});