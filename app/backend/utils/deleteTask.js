function mockDatabaseFunction(returnValue) {
    return jest.fn(() => Promise.resolve(returnValue));
  }
  

  module.exports = mockDatabaseFunction;