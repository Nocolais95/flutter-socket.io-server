// Importacion 
const express = require('express');
const path = require('path');
require('dotenv').config();
// App de express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

// Path publico, dirname apunta a donde sea que este alojado el servidor
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

// Para escuchar peticiones hay que estar escuchando en algun puerto y llamamos un callback
server.listen(process.env.PORT, (err)=> {
    if(err) throw new Error(err);
    console.log('Servidor corriendo en puerto', process.env.PORT);
});
