const mocks = {
  Query: () => ({
    user: () => Promise.resolve({
      id: 'u0000001',
      firstName: 'Bruce',
      lastName: 'Wayne',
      userName: 'bruce.wayne@example.com',
      joinDate: new Date().toISOString(),
      role: 'ADMIN',
    }),
  }),
};

export default mocks;
