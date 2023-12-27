import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from '../utils/constants.ts';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
});
