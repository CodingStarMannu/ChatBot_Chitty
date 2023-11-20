
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';
import './config/mongoose.js'; 
const app = express(); 

import { createServer } from 'http';
import { Server as SocketIo } from 'socket.io';

const server = createServer(app);
const io = new SocketIo(server);
const port = process.env.PORT || 8000;




server.listen(port, (error) => {
    if (error) {
      console.log("Error in creating server: ", error);
    }
    console.log(`Server is up and running on ${port}`);
  });




