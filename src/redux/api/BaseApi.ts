/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://bike-rental-services.vercel.app/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithRefreshToken: BaseQueryFn<
//   FetchArgs,
//   BaseQueryApi,
//   DefinitionType
// > = async (args, api, extraOptions): Promise<any> => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result?.error?.status === 500) {
//     const res = await fetch("http://localhost:5000/auth/refresh-token", {
//       method: "POST",
//       credentials: "include",
//     });

//     const data = await res.json();

//     if (data?.data?.accessToken) {
//       const user = (api.getState() as RootState).auth.user;

//       api.dispatch(login({ user: user, token: data?.data?.accessToken }));

//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logout());
//     }
//   }
//   return result;
// };

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['user', 'bike', 'coupon', 'types', 'rental'],
  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const {  } = baseApi;
