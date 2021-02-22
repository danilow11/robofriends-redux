import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardList from './CardList';
import React from 'react';

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Dani Alva',
      username: 'danialva',
      email: 'danialva@mail.com'
    }
  ];

  const tree = renderer.create(<CardList robots={mockRobots} />).toJSON();
  expect(tree).toMatchSnapshot();
  // expect(shallow(<Card/>)).toMatchSnapshot();
});
