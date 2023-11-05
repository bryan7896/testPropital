import './styles.scss'
import React from 'react';

import { CardGeneralProps } from './CardGeneral.types';
import Button from '../button/Button';

const CardGeneral: React.FC<CardGeneralProps> = ({ style, onClick }) => {

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 justify-content-center d-flex">
            <section className='cardGeneral'>
                {/* <img
                    className="imgCardGeneral"
                    height={170}
                    src="https://projects-manager-images.prd.lifullconnect.com/d68beee2-e798-490f-a01a-baa3bb6019ee/d68beee2-e798-490f-a01a-baa3bb6019ee_32f94c39-ae79-48c9-8511-04aae442b49a.png"></img> */}
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIzYjgzYzI1MS01ZmM1LTRiNWMtOWNmNS1lNGZjMjZhZDZhNjcvM2I4M2MyNTEtNWZjNS00YjVjLTljZjUtZTRmYzI2YWQ2YTY3X2MzZjc1ZTBiLWI0YzEtNGJjMi1hNWQ4LTNjYmUzMjFlZGZkNS5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIzYjgzYzI1MS01ZmM1LTRiNWMtOWNmNS1lNGZjMjZhZDZhNjcvM2I4M2MyNTEtNWZjNS00YjVjLTljZjUtZTRmYzI2YWQ2YTY3X2MzZjc1ZTBiLWI0YzEtNGJjMi1hNWQ4LTNjYmUzMjFlZGZkNS5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIzYjgzYzI1MS01ZmM1LTRiNWMtOWNmNS1lNGZjMjZhZDZhNjcvM2I4M2MyNTEtNWZjNS00YjVjLTljZjUtZTRmYzI2YWQ2YTY3X2MzZjc1ZTBiLWI0YzEtNGJjMi1hNWQ4LTNjYmUzMjFlZGZkNS5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19" alt="Third slide" />
                        </div>
                    </div>
                </div>
                <div className='textContent'>
                    <p className='m-0'>$ 20.50</p>
                    <h4 className='m-0'>Montería</h4>
                    <p className='m-0'>Calle larga</p>
                    <Button type='red' style={{ marginBlock: 10 }} text='Ver detalles' />
                </div>
            </section>
        </div>
    );
};

export default CardGeneral;
