import apiSlice from '../api/api-slice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (data) => {
        return {
          url: '/api/secret-root/admin/auth/login',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
