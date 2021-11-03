/**
 * @jest-environment jsdom
 */
const { shallow, mount, render, configure } = require('enzyme')
import renderer from 'react-test-renderer'

import Footer from './Footer'
import Layout from './Layout'
import Nav from './Nav'

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
];

describe('Footer', () => {
  it('renders Powered by text', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('a').text()).toEqual('Powered by ');
  });
});

describe('Footer Snapshot', () => {
  it('renders with no errors', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('Layout', () => {
  it('renders with albums and results props', () => {
    const data = sample;
    const wrapper = mount(<Layout albums={data} results={data} />);
    expect(wrapper.props().albums[0]).toEqual(data[0]);
    expect(wrapper.props().albums[1]).toEqual(data[1]);
    expect(wrapper.props().results[0]).toEqual(data[0]);
    expect(wrapper.props().results[1]).toEqual(data[1]);
  });
});

describe('Layout Snapshot', () => {
  it('renders with no errors', () => {
    const component = renderer.create(<Layout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('Nav', () => {
  it('renders Photo Album App text', () => {
    const wrapper = mount(<Nav />);
    expect(wrapper.find('a').text()).toEqual('Photo Album App');
  });
});

describe('Nav', () => {
  it('renders with albums and results props', () => {
    const data = sample;
    const wrapper = mount(<Nav albums={data} results={data} />);
    expect(wrapper.props().albums[0]).toEqual(data[0]);
    expect(wrapper.props().albums[1]).toEqual(data[1]);
    expect(wrapper.props().results[0]).toEqual(data[0]);
    expect(wrapper.props().results[1]).toEqual(data[1]);
  });
});

describe('Nav Snapshot', () => {
  it('renders with no errors', () => {
    const component = renderer.create(<Nav />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

