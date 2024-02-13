import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { gqlEndpoint, gqlDevEndpoint } from '../config';

const useProduction = process.env.GQL_ENV === 'production';
const gqlUrl = useProduction ? gqlEndpoint : gqlDevEndpoint;

const httpLink = new HttpLink({
  uri: gqlUrl,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
