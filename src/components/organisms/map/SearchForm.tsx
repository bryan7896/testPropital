import React, { useCallback } from "react";
import { SearchFormProps } from "./SearchForm.types";
import { useNavigate } from "react-router";
import Select from "../../atoms/select/Select";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import ServicesApi from "../../../api/services";
import { filterGeneral } from "../../../utils/helpers/helpers";
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

  // Obtener la lista de ubicaciones del estado.
  const locations = useSelector((state: RootState) => state.general.locations);

  // Utilizar la mutación para obtener la lista de bienes raíces.
  const [get_realEstateLists] = ServicesApi.useRealEstateMutation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  // Función para obtener la lista de bienes raíces y navegar a los resultados.
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
