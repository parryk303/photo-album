/**
 * @jest-environment jsdom
 */
const { shallow, mount, render, configure } = require('enzyme')

import Photos from './index'

const sampleB = [
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

describe("Photos", () => {
  it("renders with no errors", () => {
    const data = sampleB;
    const wrapper = mount(<Photos photos={data} />);
    expect(wrapper.props().photos[0]).toEqual(data[0]);
    expect(wrapper.props().photos[1]).toEqual(data[1]);
  });
});
