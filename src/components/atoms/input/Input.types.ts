import { FieldErrors, UseFormRegister } from "react-hook-form";


export interface InputProps {
    /* 
     * @Example: placeholder={'Hola mundo'}
     */
    placeholder: string;
    /* 
     * @Example: isRequired={true}
     */
    isRequired: boolean;
    /* 
     * @Example: name={'search'}
     */
    name: string;
    /* 
     * @Example: register={register}
     */
    register: UseFormRegister<any>;
    /* 
     * @Example: errors={errors}
     */
    errors: FieldErrors<any>
    /* 
     * @Example: style={{margin: 10}}
     */
    style?: React.CSSProperties | undefined;
}