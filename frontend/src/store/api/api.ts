import { GET_BOOKS } from "../../hooks/books.ts";
import backendService from "../../services/backend-service.ts";
import { graphqlBaseUrl } from "../../utils/environment.ts";
import { loginUser } from "../features/auth/slice.ts";
import fetchBaseQuery from "./fetchBaseQuery.ts";
import {print} from 'graphql';

import {createApi} from "@reduxjs/toolkit/query/react";
import { students } from "./data.ts";
import { addStudent } from "../features/main/slice.ts";

export const api = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery,
        tagTypes: [],
        endpoints: (builder) => ({
                login: builder.mutation<{token: string}, {email: string, password: string}>({
                        queryFn: async(body: {email: string, password: string}, api, extraOptions) => {
                        try {
                                const reponse = await backendService.login(body);
                                api.dispatch(loginUser({user: reponse.user, token: reponse.token}))
                                return {data: reponse}
                        } catch (error) {
                                return {error: error}
                        }
                        }
                }),

                getStudents: builder.query({
                        queryFn: async(_, api) => {
                        try {
                                return {data: students}

                        } catch (error) {
                                return {error: error}
                        }
                        }
                }),

                getStudentById: builder.query({
                        queryFn: async(id: string | number, api) => {
                        try {
                                const student = students.find((el) => el.id === id)
                                if(student) {
                                        api.dispatch(addStudent(student))
                                }
                                return {data: student}
                        } catch (error) {
                                return {error: error}
                        }
                        }
                }),

                getBooks: builder.query({
                query: (title?: string)  => ({
                        body: {
                        query: print(GET_BOOKS),
                        // variables: { title },
                        },
                }),
        })

})
})
