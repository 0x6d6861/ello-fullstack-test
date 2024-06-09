import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  csrfPrevention: false,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault()
      : ApolloServerPluginLandingPageLocalDefault(),
  ],
});

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { 
      port: Number(process.env.PORT) || 4000 
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();