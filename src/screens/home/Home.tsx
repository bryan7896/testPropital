import './styles.scss'
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setRealEstateLists, setSearch } from '../../utils/slices/generalSlice';
import { useNavigate } from 'react-router-dom';
import ServicesApi from '../../api/services';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import CardGeneral from '../../components/atoms/cardGeneral/CardGeneral';
import Select from '../../components/atoms/select/Select';
import MapComponent from '../../components/molecules/map/Map';
import { RootState } from '../../store';
import { RealEstateLists } from '../../utils/slices/generalSlice.types';
import { filterGeneral, filterLocations } from '../../utils/helpers/helpers';

interface FormData {
    search: string;
    location: string;
    state: string;
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const locations = useSelector((state: RootState) => state.general.locations);
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

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const getRealEstateList = useCallback(async (data: any) => {
        console.log('--data--',data)
        try {
            const res = await get_realEstateLists(filterGeneral(data)).unwrap();
            dispatch(setRealEstateLists(res))
            navigate('/results');
        } catch (error) {
            console.log('error', error)
        }
    }, [navigate, get_realEstateLists])

    const onSubmit: SubmitHandler<FormData> = (data) => {
        getRealEstateList(data)
    };

    return (
        <div className="containerSearch">
            <section className='text-center mt-5'>
                <h1>Tu próxima casa</h1>
                <h4 style={{ color: '#616067', marginTop: 30 }}>Encuentra inmuebles en <a className="operation-type" onClick={() => getRealEstateList({ state: "venta" })}>venta</a> o
                    <a className="operation-type" onClick={() => getRealEstateList({ state: "arriendo" })} style={{ marginLeft: 5 }}>arriendos</a></h4>
            </section>
            <form
                className='justify-content-center d-flex'
                onSubmit={handleSubmit(onSubmit)}
                style={{ margin: '0 auto' }}
            >
                <Select
                    options={[{ value: 'venta', label: 'Venta' }, { value: 'arriendo', label: 'Arriendo' }]}
                    isRequired={false}
                    name='state'
                    placeholder='Tipo de contrato'
                    errors={errors}
                    register={register} />
                <Select
                    options={locations?.map(location => ({
                        value: location.id,
                        label: location.name
                    })) ?? []}
                    isRequired={false}
                    name='location'
                    style={{ maxWidth: 200 }}
                    placeholder='Ubicación'
                    errors={errors}
                    register={register} />
                <Input
                    style={{ width: 300 }}
                    isRequired={false}
                    name='search'
                    placeholder='Ingresa barrio, dirección o ciudad...'
                    errors={errors}
                    register={register} />
                <Button text='Continuar' />
            </form>
            <h3 className='justify-content-center d-flex mt-3'>Resultados más recientes</h3>
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

export default Home;
