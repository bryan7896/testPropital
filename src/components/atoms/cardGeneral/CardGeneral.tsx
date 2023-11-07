import './styles.scss'
import React, { useEffect, useState } from 'react';

import { CardGeneralProps } from './CardGeneral.types';
import Button from '../button/Button';

const CardGeneral: React.FC<CardGeneralProps> = ({ realEstate, style, onClick, type = 'general' }) => {

    const images = realEstate?.images ?? [];

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const image = images[imageIndex];

    return (
        <div className={type == 'general' ? "col-sm-12 col-md-6 col-lg-4 justify-content-center d-flex mt-2" : undefined}>
            <section className='cardGeneral' onClick={onClick}>
                <img
                    className="imgCardGeneral"
                    height={170}
                    src={image}></img>
                <div className='textContent'>
                    <p className='m-0'>{realEstate?.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
                    <h4 className='m-0'>{realEstate?.locations?.name}</h4>
                    <p className='m-0'>{realEstate?.neighborhood}</p>
                    {type == 'general' && <Button
                        type='red'
                        style={{ marginBlock: 10 }}
                        text='Ver detalles' />}
                </div>
            </section>
        </div>
    );
};

export default CardGeneral;
