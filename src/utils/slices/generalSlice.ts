import { createSlice } from '@reduxjs/toolkit';
import { servicesApi } from '../../api/services';
import { GeneralState } from './generalSlice.types';

const initialState: GeneralState = {
    search: '',
    realEstateLists: [{test: 'data'}],
    realEstate: undefined,
    details: undefined,
    locations: undefined,
};

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSearch: (state, { payload }) => {
            state.search = payload;
        },
        setRealEstateLists: (state, { payload }) => {
            state.realEstateLists = payload;
        },
        setDetails: (state, { payload }) => {
            state.details = payload;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(servicesApi.endpoints.realEstate.matchFulfilled, (state, { payload }) => {
            state.realEstateLists = payload ?? []
        })
        builder.addMatcher(servicesApi.endpoints.realEstateListsId.matchFulfilled, (state, { payload }) => {
            state.realEstate = payload ?? undefined
        })
        builder.addMatcher(servicesApi.endpoints.locations.matchFulfilled, (state, { payload }) => {
            state.locations = payload ?? undefined
        })
    },
});

export const { setSearch, setRealEstateLists, setDetails } = generalSlice.actions;
export default generalSlice.reducer;