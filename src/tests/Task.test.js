import Task from '../components/Task';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('../App');
jest.mock('../hooks/useTask');

const mockProps = {
  title: 'TTitle',
  description: 'desc',
  status: {
    color: 'red',
    btn: 'start'
  },
  id: 0
};
describe('Task test', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Task task={mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
