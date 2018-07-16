import express from 'express';
import app from '.';

jest.mock('express', () => jest.fn(() => ({
  use: jest.fn(),
  get: jest.fn(),
  post: jest.fn(),
  listen: jest.fn((port, callback) => callback(port)),
})));

jest.mock('./logger', () => ({
  info: jest.fn(),
}));

describe('Server', () => {
  it('should call express', () => {
    expect(express).toBeCalled();
  });

  it('should call listen', () => {
    expect(app.listen).toBeCalled();
  });
});
