import { baseApi } from '../../api/BaseApi';

export const Comparison = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComparison: builder.query({
      query: () => '/comparison',
      providesTags: ['comparison'],
    }),
    getComparison: builder.query({
      query: (id) => `/comparison/${id}`,
      providesTags: ['comparison'],
    }),
    createComparison: builder.mutation({
      query: (data) => ({
        url: '/comparison',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comparison'],
    }),
    updateComparison: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comparison/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['comparison'],
    }),
    deleteComparison: builder.mutation({
      query: (id) => ({
        url: `/comparison/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['comparison'],
    }),
  }),
});

export const {
  useCreateComparisonMutation,
  useDeleteComparisonMutation,
  useUpdateComparisonMutation,
  useGetAllComparisonQuery,
  useGetComparisonQuery,
} = Comparison;
