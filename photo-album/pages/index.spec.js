/**
 * @jest-environment jsdom
 */
const { shallow, mount, render, configure } = require('enzyme')

import Index from './index'

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

describe("Index", () => {
  it("renders with no errors", () => {
    const data = sample;
    const wrapper = mount(<Index albums={data} results={data} />);
    expect(wrapper.props().albums[0]).toEqual(data[0]);
    expect(wrapper.props().albums[1]).toEqual(data[1]);
    expect(wrapper.props().results[0]).toEqual(data[0]);
    expect(wrapper.props().results[1]).toEqual(data[1]);
  });
});
