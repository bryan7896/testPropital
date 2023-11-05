import { FieldErrors, UseFormRegister } from "react-hook-form";


export interface SelectProps {
    /* 
     * Ejemplo: "Seleccionar opción"
     */
    placeholder: string;
    /* 
     * Ejemplo: true
     */
    isRequired: boolean;
    /* 
     * Ejemplo: "miSelect"
     */
    name: string;
    /* 
     * Ejemplo: register
     */
    register: UseFormRegister<any>;
    /* 
     * Ejemplo: errors
     */
    errors: FieldErrors<any>;
    /* 
     * Ejemplo: [{ value: '1', label: 'Opción 1' }, { value: '2', label: 'Opción 2' }]
     */
    options: { value: string; label: string }[];
    /* 
     * Ejemplo: { margin: 10, width: '100%' }
     */
    style?: React.CSSProperties | undefined;
}
