import { suma } from './suma.js';
import { resta } from './resta.js';
import { multiplicacion } from './multiplicacion.js';
import { division } from './division.js';

window.realizarOperacion = function(tipo) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  switch (tipo) {
    case 'suma':
      resultado = suma(num1, num2);
      break;
    case 'resta':
      resultado = resta(num1, num2);
      break;
    case 'multiplicacion':
      resultado = multiplicacion(num1, num2);
      break;
    case 'division':
      resultado = division(num1, num2);
      break;
  }

  document.getElementById("resultado").innerText = Resultado: ${resultado};
}