import { apiBaseUrl, graphqlBaseUrl } from "../../utils/environment.ts";
import {RootState} from "../store.ts";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// export default fetchBaseQuery({
//     baseUrl: apiBaseUrl,
//     prepareHeaders: (headers, { getState }) => {
//         const token = (getState() as RootState).auth.token;

//         // If we have a token set in state, let's assume that we should be passing it.
//         if (token) {
//             headers.set('authorization', `Bearer ${token}`);
//         }

//         return headers;
//     }
// })

const fetchBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors.map(error => error.message).join(', '));
    }

    return { data: result.data };
  };

  export default fetchBaseQuery({
    baseUrl: graphqlBaseUrl
  });