const http = require('http');
const app = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
console.log(PORT);
const server = http.createServer(app);

server.listen(PORT);