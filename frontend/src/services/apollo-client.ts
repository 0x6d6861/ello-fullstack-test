import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { graphqlBaseUrl } from '../utils/environment';

const client = new ApolloClient({
  uri: graphqlBaseUrl,
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors'
  },
});

export default client;