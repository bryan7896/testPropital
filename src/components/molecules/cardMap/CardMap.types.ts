import { RealEstateLists } from "../../../utils/slices/generalSlice.types";


export interface CardMapProps {
    /* 
     * @Example: onClick={()=>{}}
     */
    onClick?: React.MouseEventHandler<any>
    /* 
     * @Example: onClick={()=>{}}
     */
    onMouseEnter?: React.MouseEventHandler<any>
    /* 
     * @Example: realEstate=[]
     */
    realEstate: RealEstateLists
}