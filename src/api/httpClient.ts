import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';

interface AxiosQueryOptions {
    baseUrl: string;
    prepareHeaders: (headers: Record<string, string>, api: unknown) => Record<string, string>;
}

type AxiosQueryArgs = {
    url: string;
    method: Method;
    body?: AxiosRequestConfig['data'];
};

const customizeHeaders = function (h: any): any {
    let headers = { ...h };
    const set = (key: string, value: string | number) => {
        headers[key] = value;
    };
    return { headers, set };
};

export const axiosBaseQuery =
    ({ baseUrl, prepareHeaders }: AxiosQueryOptions): BaseQueryFn<AxiosQueryArgs, unknown, unknown> => async (
        { url, method, body: data },
        api
    ) => {
        let headers = axios.defaults.headers.common;
        if (prepareHeaders) {
            headers = {
                ...(prepareHeaders(customizeHeaders(headers), api) as any).headers,
            };
        }

        try {
            console.log('DATA ======');
            console.log(data);
            console.log('HEADERS ======');
            console.log(baseUrl);
            console.log(url);
            const result = await axios({ method, url: `${baseUrl}/${url}`, data, headers });
            console.log(result.data);
            return { data: result.data };
        } catch (axiosError) {
            const error: any = axiosError as AxiosError;
            console.log(error);
            return {
                error: String(error),
            };
        }
    };
