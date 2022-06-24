import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qgyp413w3n01ywauhf8gvm/master',
  cache: new InMemoryCache()
});