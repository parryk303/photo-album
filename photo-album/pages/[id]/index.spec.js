/**
 * @jest-environment jsdom
 */
const { shallow, mount, render, configure } = require('enzyme')
import renderer from 'react-test-renderer'

import Photos from './index'

const sample = [
    {
      albumId: 1,
      id: 1,
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952"
    },
    {
      albumId: 1,
      id: 2,
      thumbnailUrl: "https://via.placeholder.com/150/771796",
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796"
    }
  ]

describe('Photos', () => {
  it('renders with no errors', () => {
    const data = sample;
    const wrapper = mount(<Photos photos={data} />);
    expect(wrapper.props().photos[0]).toEqual(data[0]);
    expect(wrapper.props().photos[1]).toEqual(data[1]);
  });
});

describe('Snapshot Testing', () => {
  it('renders with no errors', () => {
    const data = sample;
    const component = renderer.create(<Photos photos={data} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
