import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './httpClient';

const API_URL = 'http://localhost:3001'

export const servicesApi = createApi({
	baseQuery: axiosBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers: any) => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	reducerPath: 'generalApiAuth',
	endpoints: (build) => ({
		realEstateListsId: build.mutation<any, any>({ query: (id) => ({method: 'get', url: `/real-estate-lists/${id}`}) }),
		realEstate: build.mutation<any, any>({ query: () => ({method: 'get', url: `/real-estate-lists/`}) }),
		locations: build.mutation<any, any>({ query: () => ({method: 'get', url: `/locations`}) }),
	})
});

const ServicesApi = servicesApi;
export default ServicesApi;