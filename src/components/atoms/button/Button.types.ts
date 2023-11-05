

export interface ButtonProps {
    /* 
     * @Example: text={'Hola mundo'}
     */
    text: string;
    /* 
     * @Example: text={'Hola mundo'}
     */
    type?: 'general' | 'red' | 'search';
    /* 
     * @Example: style={{margin: 10}}
     */
    style?: React.CSSProperties | undefined;
    /* 
     * @Example: onClick={()=>{}}
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}