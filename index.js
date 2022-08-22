const express = require('express');
const controller = require('./controller');

const app = express();
const router = express.Router();

router  
  .get('/encender', controller.encender)
  .get('/apagar', controller.apagar);

app
  .use('/', router)
  .listen('3800', () => console.log('Servidor funcionando en http://localhost:3800'));