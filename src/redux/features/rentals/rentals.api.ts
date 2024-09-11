import { TReduxResponse } from '../../../types/global.type';
import { TRental } from '../../../types/rentals/rentals.type';
import { baseApi } from '../../api/BaseApi';

export const Rentals = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRentals: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        return {
          url: '/rentals',
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['rental'],
    }),
    getSingleRental: builder.query({
      query: (id) => ({
        url: `/rentals/${id}`,
        method: 'GET',
      }),
      providesTags: ['rental'],
    }),
    getUserRentals: builder.query({
      query: () => ({
        url: `/rentals/user/my`,
        method: 'GET',
      }),
      providesTags: ['rental'],
    }),
    createRental: builder.mutation({
      query: (data) => ({
        url: '/rentals',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['rental'],
    }),
    advancePayment: builder.mutation({
      query: ({ data, id }) => ({
        url: `/rentals/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['rental'],
    }),
    returnBike: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/return`,
        method: 'PUT',
      }),
      invalidatesTags: ['rental'],
    }),
    rentalPayment: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/payment`,
        method: 'PUT',
      }),
      invalidatesTags: ['rental'],
    }),
  }),
});

export const {
  useAdvancePaymentMutation,
  useGetSingleRentalQuery,
  useGetUserRentalsQuery,
  useCreateRentalMutation,
  useGetAllRentalsQuery,
  useReturnBikeMutation,
  useRentalPaymentMutation,
} = Rentals;
