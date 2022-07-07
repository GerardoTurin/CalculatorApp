import React from 'react';
import '../estilos/BotonClear.css';


const BotonClear = (props) => {
    return (
        <button className="boton-clear" onClick={props.manejarClear}>
            {props.children}
        </button>
    )
}


export default BotonClear;