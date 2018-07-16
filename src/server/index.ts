import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from '../graphql/schema';
import logger from './logger';

const PORT = 3141;
const app = express();

app.use(bodyParser.json());
app.get('/graphql', graphiqlExpress({ endpointURL: '/graphql' }));
app.post('/graphql', graphqlExpress({ schema }));
app.listen(PORT, () => logger.info(`Server on port ${PORT}`));

export default app;
