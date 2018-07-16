import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import './schema';

jest.mock('graphql-tools');

describe('Schema', () => {
  it('should call makeExecutableSchema', () => {
    expect(makeExecutableSchema).toBeCalled();
  });

  it('should call addMockFunctionsToSchema', () => {
    expect(addMockFunctionsToSchema).toBeCalled();
  });
});
