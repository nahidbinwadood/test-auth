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
    profileData: builder.query({
      query: () => '/api/secret-root/admin/auth/profile',
      providesTags: ['profile-data'],
    }),
  }),
});

export const { useUserLoginMutation, useProfileDataQuery } = authApi;
