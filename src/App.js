import React, { useState } from 'react';
import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCampLogo.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import Imagen from './componentes/Imagen.js';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2'




function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const limpiarInput = () => {
    setInput('');
  };

  const calcularResultado = () => {

    // validate that the input does not have two or more operators in a row

    if (input.includes('++') || input.includes('--') || input.includes('+-') || input.includes('-+') || input.includes('--') || input.includes('+*') || input.includes('-*') || input.includes('*+') || input.includes('*/') || input.includes('/*') || input.includes('+/') || input.includes('-/')) {
      Swal.fire({
        title: 'Error',
        text: 'No puedes ingresar dos o más operadores seguidos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      limpiarInput();
    }

    // Evaluar que no haya ningun valor en el input
    if (input) {
      setInput(evaluate(input));
    } else {
      Swal.fire({
        title: 'No hay nada que calcular',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    }
  };

  




  return (
    <div className="App">
      <div className='calculadora-contenedor'>
        <Imagen src={FreeCodeCampLogo} alt="logo" />
      </div>
      <div className='calculadora-div'>
        <Pantalla input={input} />
        <div className='calculadora-fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='calculadora-fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='calculadora-fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='calculadora-fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='calculadora-fila'>
          <BotonClear manejarClear={limpiarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
