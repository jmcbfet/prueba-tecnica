import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import { Server as WebSocketServer } from 'socket.io';

import Rutas from './routes/index.routes.js';

import './config/database.js';
 
const app = express()
const server = http.createServer(app);
const io = new WebSocketServer(server);

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(cors());

io.on('connection', () => {
    console.log('nueva conexion');
})

app.use("/api", Rutas);

server.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})