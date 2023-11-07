import React, { useCallback, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import PointMark from '../../../assets/pointMark.png';
import { SearchFormProps } from "./SearchForm.types";
import { RealEstateLists } from "../../../utils/slices/generalSlice.types";

import { useNavigate } from "react-router";
import Select from "../../atoms/select/Select";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import ServicesApi from "../../../api/services";
import { filterGeneral, filterLocations } from "../../../utils/helpers/helpers";
import { SubmitHandler, useForm } from "react-hook-form";
import { setRealEstateLists } from "../../../utils/slices/generalSlice";

interface FormData {
  search: string;
  location: string;
  state: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ }) => {
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
  );
};

export default SearchForm;
