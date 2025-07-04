import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  prepareHeaders: async (headers, { getState }) => {
    const token = (getState() as RootState).authSlice.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('x-api-key', process.env.NEXT_PUBLIC_API_KEY as string);

    return headers;
  },
});

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ['profile-data'],
});

export default apiSlice;
