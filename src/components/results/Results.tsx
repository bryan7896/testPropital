import './styles.scss'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import Card from '../card/Card';
import { realEstateLists } from '../../slices/generalSlice.types';
import { setDetails } from '../../slices/generalSlice';

const Results: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchValue = useSelector((state: RootState) => state.general.search);
    const realEstateLists = useSelector((state: RootState) => state.general.realEstateLists);

    const details = (property: realEstateLists) => {
        dispatch(setDetails(property));
        navigate('/details');
    }

    return (
        <div className='mt-5'>
            <h1 className='d-flex justify-content-center fontText'>
                Resultados de la búsqueda "{searchValue}"
            </h1>
            <div className='mb-25 row' style={{margin: 0}}>
                {realEstateLists.map((property: realEstateLists, i: number) => (
                    <Card property={property} key={`btn-${i}`} onClick={() => details(property)} />
                ))}
            </div>
        </div>
    );
};

export default Results;