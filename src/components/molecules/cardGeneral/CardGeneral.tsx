import React, { useEffect, useState } from 'react';
import './styles.scss'; // Importamos los estilos para este componente

import { CardGeneralProps } from './CardGeneral.types';
import Button from '../../atoms/button/Button';

const CardGeneral: React.FC<CardGeneralProps> = ({ realEstate, style, onClick, type = 'general' }) => {

    const images = realEstate?.images ?? [];

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        // Inicia un intervalo para cambiar automáticamente la imagen cada 5 segundos.
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        // Limpia el intervalo cuando el componente se desmonta.
        return () => {
            clearInterval(interval);
        };
    }, []);

    const image = images[imageIndex];

    return (
        <div className={type === 'general' ? "col-sm-12 col-md-6 col-lg-4 justify-content-center d-flex mt-2" : undefined} data-testid="cardGeneral">
            <section className='cardGeneral' onClick={onClick}>
                <img
                    className="imgCardGeneral"
                    height={170}
                    src={type === 'general' ? image : realEstate?.images[0]}></img>
                <div className='textContent'>
                    <p className='m-0'>{realEstate?.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
                    <h4 className='m-0'>{realEstate?.locations?.name}</h4>
                    <p className='m-0'>{realEstate?.neighborhood}</p>
                    {type === 'general' && <Button
                        type='red'
                        style={{ marginBlock: 10 }}
                        text='Ver detalles' />}
                </div>
            </section>
        </div>
    );
};

export default CardGeneral;
