import './styles.scss'
import React, { useEffect, useState } from 'react';

import { CardGeneralProps } from './CardGeneral.types';
import Button from '../button/Button';

const CardGeneral: React.FC<CardGeneralProps> = ({ style, onClick }) => {

    const images = [
        "https://projects-manager-images.prd.lifullconnect.com/d68beee2-e798-490f-a01a-baa3bb6019ee/d68beee2-e798-490f-a01a-baa3bb6019ee_32f94c39-ae79-48c9-8511-04aae442b49a.png",
        "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIzYjgzYzI1MS01ZmM1LTRiNWMtOWNmNS1lNGZjMjZhZDZhNjcvM2I4M2MyNTEtNWZjNS00YjVjLTljZjUtZTRmYzI2YWQ2YTY3X2MzZjc1ZTBiLWI0YzEtNGJjMi1hNWQ4LTNjYmUzMjFlZGZkNS5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19",
        "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiI5MGIwYmNkNC1kOTA1LTQ5YzUtYjZjMy1hY2Q3NTQ5Y2QwNTMvOTBiMGJjZDQtZDkwNS00OWM1LWI2YzMtYWNkNzU0OWNkMDUzXzkxYzIzZDI2LWFjNWYtNDFmNC1hMGNlLTJmNTY4ZjZhY2ExZS5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19"
    ]

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
        <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center d-flex">
            <section className='cardGeneral' onClick={onClick}>
                <img
                    className="imgCardGeneral"
                    height={170}
                    src={image}></img>
                <div className='textContent'>
                    <p className='m-0'>$ 20.50</p>
                    <h4 className='m-0'>Montería</h4>
                    <p className='m-0'>Calle larga</p>
                    <Button
                        type='red'
                        style={{ marginBlock: 10 }}
                        text='Ver detalles' />
                </div>
            </section>
        </div>
    );
};

export default CardGeneral;
