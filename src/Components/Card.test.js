import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Card';
import React from 'react';

it('expect to render Card component', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(shallow(<Card/>)).toMatchSnapshot();
});
