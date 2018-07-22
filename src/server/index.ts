import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from '../graphql/schema';
import logger from './logger';

const PORT = process.env.PORT || 3141;
const app = express();

const apolloServer = new ApolloServer(<any>{
  schema,
  playground: {
    settings: {
      'editor.cursorShape': 'block',
    },
  },
});

apolloServer.applyMiddleware({ app });

app.listen(PORT, () => logger.info(`Server on port ${PORT}`));

export default app;
