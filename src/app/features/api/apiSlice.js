import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    tagTypes: ["Users", "Products"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "/users",
            }),
            providesTags:["Users"] 
        }),
        addUsers: builder.mutation({
            query: (data) => ({
                url: "/users",
                method: "POST",  
                body: data
            }),
            invalidatesTags: ["Users"],
        }),
        removeUsers: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"],
        }),
    }),
})

export const { useGetUsersQuery, useAddUsersMutation, useRemoveUsersMutation } = usersApi;