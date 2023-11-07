// src/components/Card.tsx
import { NavigateFunction } from 'react-router';
import { RealEstateLists } from '../../../utils/slices/generalSlice.types';
import CardGeneral from '../../molecules/cardGeneral/CardGeneral';
import './styles.scss'
import React from 'react';

interface CardProps {
    realEstateLists: RealEstateLists[];
    navigate: NavigateFunction;
    text: string
}

const Cards: React.FC<CardProps> = ({ realEstateLists, navigate, text }) => {

    return (
        <div>
            <h3 className='justify-content-center d-flex mt-3'>{text}</h3>
            <div className="container w-100 justify-content-center d-flex">
                <div className="row justify-content-center d-flex">
                    {realEstateLists?.map((realEstate: RealEstateLists, i: number) => (
                        <CardGeneral realEstate={realEstate} key={`card-${i}`} onClick={() => navigate('/details')} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
