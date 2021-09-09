import TaskCreator from '../components/TaskCreator';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../App');
jest.mock('../hooks/useTask');

describe('TaskCreator test', () => {
  it('should render properly', () => {
    const wrapper = shallow(<TaskCreator />);
    expect(wrapper).toMatchSnapshot();
  });
});
