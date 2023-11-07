import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RealEstateLists } from "../../../utils/slices/generalSlice.types";


export interface MapProps {
    /* 
     * Ejemplo: 
     */
    realEstateLists: RealEstateLists[];
    /* 
     * Ejemplo: { margin: 10, width: '100%' }
     */
    style?: React.CSSProperties | undefined;
}
