import { render } from 'react-dom';
import './main';

jest.mock('react-apollo');
jest.mock('react-dom');
jest.mock('react-router-dom');
jest.mock('./components/app/app');
jest.mock('./main.scss', () => '');

describe('Main', () => {
  it('should call render', () => {
    expect(render).toBeCalled();
  });
});
