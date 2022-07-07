import React from 'react';
import '../estilos/Imagen.css';



const Imagen = (props) => {
    return (
        <img className='calculadora-logo' src={props.src} alt={props.alt} />
    );
}


export default Imagen;