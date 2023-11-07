import React from 'react';
import './styles.scss'; // Importamos los estilos para este componente

import { CardMapProps } from './CardMap.types';

const CardMap: React.FC<CardMapProps> = ({ realEstate, onClick, onMouseEnter }) => {

    return (
        <section className='row p-2 contentCardMap' onClick={onClick} onMouseEnter={onMouseEnter}>
            <div className='col-3 '>
                <img
                    className="mapImg"
                    src={realEstate?.images[0]} />
            </div>
            <div className='col-9 align-self-center textCardMap'>
                <p className='m-0'>{realEstate?.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
                <h4 className='m-0'>{realEstate?.locations?.name}</h4>
                <p className='m-0'>{realEstate?.neighborhood}</p>
            </div>
        </section>
    );
};

export default CardMap;
