import { createSlice } from '@reduxjs/toolkit';
import { servicesApi } from '../../api/services';
import { GeneralState } from './generalSlice.types';

//Estado inicial de las variables
const initialState: GeneralState = {
    search: undefined,
    realEstateLists: [],
    realEstate: undefined,
    details: undefined,
    locations: undefined,
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSearch: (state, { payload }) => {
            state.search = payload; // Actualiza el estado de búsqueda
        },
        setRealEstateLists: (state, { payload }) => {
            state.realEstateLists = payload; // Actualiza la lista de bienes raíces
        },
        setDetails: (state, { payload }) => {
            state.details = payload; // Actualiza los detalles generales
        },
    },
    extraReducers(builder) {
        builder.addMatcher(servicesApi.endpoints.realEstateListsId.matchFulfilled, (state, { payload }) => {
            state.realEstate = payload ?? undefined; // Actualiza los detalles de bienes raíces desde una llamada al servicio
        });
        builder.addMatcher(servicesApi.endpoints.locations.matchFulfilled, (state, { payload }) => {
            state.locations = payload ?? undefined; // Actualiza la información de ubicaciones desde una llamada al servicio
        });
    },
});

export const { setSearch, setRealEstateLists, setDetails } = generalSlice.actions;
export default generalSlice.reducer;
