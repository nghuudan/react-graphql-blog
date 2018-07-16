import mocks from './mocks';

describe('Mocks', () => {
  it('should be an object', () => {
    expect(mocks).toBeInstanceOf(Object);
  });

  it('should have a Query property', () => {
    expect(mocks).toHaveProperty('Query');
  });

  describe('Query', () => {
    const query = mocks.Query();

    it('should return an object', () => {
      expect(query).toBeInstanceOf(Object);
    });

    describe('user', () => {
      it('should return a Promise', () => {
        expect(query.user()).toBeInstanceOf(Promise);
      });
    });
  });
});
