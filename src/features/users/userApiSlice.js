import { apiSlice } from "../../config/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 30,
        })
    })
})

export const {
    useGetUsersQuery 
} = usersApiSlice