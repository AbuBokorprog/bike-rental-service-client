import { baseApi } from "../../api/BaseApi";

export const Rentals = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRentals: builder.query({
            query: (args) => {
                const params = new URLSearchParams()

                return {
                    url: "/rentals",
                    method: "GET",
                    params: params
                }
            },
            providesTags: ['rental']
        }),
        getSingleRental: builder.query({
            query: (id) => ({
                url: `/rentals/${id}`,
                method: "GET"
            }),
            providesTags: ["rental"]
        }),
        createRental: builder.mutation({
            query: (data) => ({
                url: '/rentals',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['rental']
        }),
        advancePayment: builder.mutation({
            query: ({data, id}) => ({
                url: `/rentals/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['rental']
        }),
        returnBike: builder.mutation({
            query: (id) => ({
                url: `/rentals/${id}/return`,
                method: "PUT",
            }),
            invalidatesTags: ['rental']
        }),
        rentalPayment: builder.mutation({
            query: ({data, id}) => ({
                url: `/rentals/payment/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ['rental']
        })
    })
})

export const {useAdvancePaymentMutation,useGetSingleRentalQuery, useCreateRentalMutation, useGetAllRentalsQuery, useReturnBikeMutation,useRentalPaymentMutation } = Rentals