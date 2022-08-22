const axios = require('axios');

const encender = (req, res, next) => {
  console.log('Encender');
  // axios.get('32.21.23.65:1337/encender');
  return res.status(200).json('OK ENCENDER');
};

const apagar = (req, res, next) => {
  console.log('Apagar');
  // Esta linea en este controlador
  // axios.get('32.21.23.65:1337/apagar');

  // estas lineas en el servidor de node de la rasp
  // const led = new Gpio(17, 'out');
  // led.read()
  //   .then(value => led.write(value ^ 1))

  return res.status(200).json('OK APAGAR');
};

module.exports = {
  encender,
  apagar,
}