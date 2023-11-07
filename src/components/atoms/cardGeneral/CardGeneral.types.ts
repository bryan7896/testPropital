import { RealEstateLists } from "../../../utils/slices/generalSlice.types";


export interface CardGeneralProps {
    /* 
     * @Example: style={{margin: 10}}
     */
    style?: React.CSSProperties | undefined;
    /* 
     * @Example: onClick={()=>{}}
     */
    onClick?: React.MouseEventHandler<any>
    /* 
     * @Example: onClick={()=>{}}
     */
    type?: 'general' | 'short'
    /* 
     * @Example: realEstate=[]
     */
    realEstate?: RealEstateLists
}