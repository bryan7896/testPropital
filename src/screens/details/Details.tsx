import { useSelector } from 'react-redux';
import SearchForm from '../../components/organisms/map/SearchForm';
import { DetailsProps } from './Details.types';
import './styles.scss'
import React, { useEffect, useState } from 'react';
import { RootState } from '../../store';
import MapComponent from '../../components/molecules/map/Map';

const Details: React.FC<DetailsProps> = ({ }) => {

    const details = useSelector((state: RootState) => state.general.details);

    const images = details?.images ?? [];
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
        <section className="container-sm">
            <div className='row'>
                <div className='col-12'>
                    <SearchForm />
                </div>
                <div className='col-12 mt-4'>
                    <img
                        className="imgCardGeneral mb-3"
                        height={300}
                        src={image}></img>
                    <div className='row'>
                        <h2 className='col-6'>{details?.neighborhood}</h2>
                        <h4 className='col-6' style={{ color: '#ee4252' }}>Desde {details?.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</h4>
                        <h4 className='col-6'>{details?.locations.name}</h4>
                        <h2 className='col-12 mt-5'>Caracteríasticas del inmueble</h2>
                        <p className='col-6'>● Baños: {details?.bathrooms}</p>
                        <p className='col-6'>● Habitaciones: {details?.bedrooms}</p>
                        <p className='col-6'>● Tipo de contrato: {details?.state}</p>
                        <p className='col-6'>● Barrio: {details?.neighborhood}</p>
                    </div>
                </div>

                <h2 className='col-12 mt-5 text-center'>Una de las mejores zonas de {details?.locations.name}</h2>
                <div className='col-12'>
                    {details && <MapComponent realEstateLists={[details]} handleMarkerHover={() => { }} setInfoWindowOpen={() => { }} />}
                </div>
            </div>
        </section>
    );
};

export default Details;
