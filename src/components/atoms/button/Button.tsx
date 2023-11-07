import React from 'react';
import './styles.scss'; // Importamos los estilos para este componente

import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ style, onClick, text, type = 'general' }) => {

    return (
        <button
            type="submit"
            style={style}
            onClick={onClick}
            className={`btn button-${type} fontText`}
        >
            {text}
        </button>
    );
};

export default Button;
