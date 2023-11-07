import './styles.scss'
import React, { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../utils/slices/generalSlice';
import { useNavigate } from 'react-router-dom';
import ServicesApi from '../../api/services';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import CardGeneral from '../../components/atoms/cardGeneral/CardGeneral';
import Select from '../../components/atoms/select/Select';
import MapComponent from '../../components/molecules/map/Map';

interface FormData {
    search: string;
}

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [get_realEstateList] = ServicesApi.useRealEstateListsIdMutation();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const getRealEstateList = useCallback(async (id: string) => {
        // await get_realEstateList(search);
        navigate('/results');
    }, [navigate])

    const onSubmit: SubmitHandler<FormData> = (data) => {
        dispatch(setSearch(data.search));
        getRealEstateList(data.search)
    };

    return (
        <div className="containerSearch">
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ maxWidth: '700px', margin: '0 auto' }}
            >
                <div className="mb-3">
                    <Input
                        isRequired
                        name='search'
                        placeholder='Ingresa barrio, dirección o ciudad...'
                        errors={errors}
                        register={register} />
                </div>
                <Select
                    options={[{ value: '1', label: 'Opción 1' }, { value: '2', label: 'Opción 2' }]}
                    isRequired
                    name='search'
                    placeholder='Selecciona'
                    errors={errors}
                    register={register} />
                <Button text='Continuar' style={{ maxWidth: '300px', margin: '0 auto' }} />
            </form>
            <div className="container w-100 justify-content-center d-flex">
                <div className="row justify-content-center d-flex">
                    <CardGeneral onClick={() => navigate('/details')} />
                    <CardGeneral onClick={() => navigate('/details')} />
                    <CardGeneral onClick={() => navigate('/details')} />
                </div>
            </div>
        </div>
    );
};

export default Home;
