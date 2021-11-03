/**
 * @jest-environment jsdom
 */
const { shallow, mount, render, configure } = require('enzyme')
import renderer from 'react-test-renderer'

import MyApp from '../_app'
import Index from '../index'

const sample = [
  {
    id: 1,
    title: "quidem molestiae enim",
    userId: 1
  },
  {
    id: 2,
    title: "sunt qui excepturi placeat culpa",
    userId: 1
  }
];

describe('MyApp Snapshot', () => {
  it('renders with no errors', () => {
    const Component = Index
    const component = renderer.create(<MyApp Component={Component} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
