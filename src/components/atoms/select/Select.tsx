import React from 'react';

import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({ placeholder, isRequired, name, register, errors, options, style, }) => {
  return (
    <div className="d-grid" style={style}>
      <select
        {...register(name, { required: isRequired })}
        id={name}
        className="form-select form-select-md" aria-label=".form-select-lg example"
      >
        <option value="" selected>{placeholder}</option>
        {options.map((property: { value: string; label: string }, i: number) => (
          <option key={`select-${i}`} value={property.value}>{property.label}</option>
        ))}
      </select>
      {errors[name] && (
        <div className="mt-2 text-danger fontText">Este campo es requerido.</div>
      )}
    </div>
  );
};

export default Select;
