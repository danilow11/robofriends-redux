import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CounterButton from './CounterButton';
import React from 'react';

it('expect to render CounterButton component', () => {
  const mockColor = 'red';

  const tree = renderer.create(<CounterButton color={mockColor} />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(shallow(<Card/>)).toMatchSnapshot();
});

it('expect to increment counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red');
});
