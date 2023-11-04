// src/components/Card.tsx
import { realEstateLists } from '../../slices/generalSlice.types';
import './styles.scss'
import React from 'react';

interface CardProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    property: realEstateLists
}

const Card: React.FC<CardProps> = ({ onClick, property }) => {

    return (
        <div>
            <div>Img</div>
            <button onClick={onClick} type="button">Ver más detalles</button>
        </div>
    );
};

export default Card;
