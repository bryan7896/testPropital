import './styles.scss'
import React from 'react';

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
