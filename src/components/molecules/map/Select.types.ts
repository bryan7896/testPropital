import { FieldErrors, UseFormRegister } from "react-hook-form";
import { realEstateLists } from "../../../utils/slices/generalSlice.types";


export interface MapProps {
    /* 
     * Ejemplo: 
     */
    realEstateLists: realEstateLists[];
    /* 
     * Ejemplo: { margin: 10, width: '100%' }
     */
    style?: React.CSSProperties | undefined;
}
