import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import typeDefs from './type-defs';

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ mocks, schema });

export default schema;
