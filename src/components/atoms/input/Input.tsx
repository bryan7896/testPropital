import './styles.scss'
import React from 'react';

import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ style, errors, placeholder, register, name, isRequired }) => {

  return (
    <div className="d-grid" style={style}>
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        {...register(name, { required: isRequired })}
        className="form-control input-search"
      />
      {errors[name] && (
        <div className="mt-2 text-danger fontText">Este campo es requerido.</div>
      )}
    </div>
  );
};

export default Input;
