import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/generalSlice';
import ServicesApi from './api/services';

const store = configureStore({
    reducer: {
        general: generalReducer,
        [ServicesApi.reducerPath]: ServicesApi.reducer, // Agrega el reducer de servicesApi
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ServicesApi.middleware), // Agrega el middleware de servicesApi
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
