import {apiBaseUrl} from "../../utils/environment.ts";
import {RootState} from "../store.ts";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export default fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    }
})