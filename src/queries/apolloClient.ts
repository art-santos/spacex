import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://api.spacex.land/graphql/`,
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;
