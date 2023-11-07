import './styles.scss'
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRealEstateLists, setSearch } from '../../utils/slices/generalSlice';
import { useNavigate } from 'react-router-dom';
import ServicesApi from '../../api/services';

import { RealEstateLists } from '../../utils/slices/generalSlice.types';
import { filterGeneral, filterLocations } from '../../utils/helpers/helpers';
import Cards from '../../components/organisms/cards/Cards';
import SearchForm from '../../components/organisms/map/SearchForm';

interface FormData {
    search: string;
    location: string;
    state: string;
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [get_locations] = ServicesApi.useLocationsMutation();
    const [get_realEstateLists] = ServicesApi.useRealEstateMutation();

    const [realEstateLists, setRealEstateListsState] = useState<RealEstateLists[]>([])

    const getLocationsList = useCallback(async () => {
        try {
            await get_locations({}).unwrap()
            const res = await get_realEstateLists(filterLocations).unwrap();
            setRealEstateListsState(res)
        } catch (error) {
            console.log('error', error)
        }
    }, [get_locations, get_realEstateLists])

    useEffect(() => {
        getLocationsList()
    }, [])

    const getRealEstateList = useCallback(async (data: any) => {
        try {
            const res = await get_realEstateLists(filterGeneral(data)).unwrap();
            dispatch(setRealEstateLists(res))
            navigate('/results');
        } catch (error) {
            console.log('error', error)
        }
    }, [navigate, get_realEstateLists])

    return (
        <div className="containerSearch">
            <section className='text-center mt-5'>
                <h1>Tu próxima casa</h1>
                <h4 style={{ color: '#616067', marginTop: 30 }}>Encuentra inmuebles en <a className="operation-type" onClick={() => getRealEstateList({ state: "venta" })}>venta</a> o
                    <a className="operation-type" onClick={() => getRealEstateList({ state: "arriendo" })} style={{ marginLeft: 5 }}>arriendos</a></h4>
            </section>
            <SearchForm />
            <Cards text='Resultados más recientes' navigate={navigate} realEstateLists={realEstateLists} />
        </div>
    );
};

export default Home;
