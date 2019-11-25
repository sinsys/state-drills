import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]



describe("Accordion component", () => {

	const wrapper = shallow(<Accordion sections={sectionsProp} />);
	const div = document.createElement('div');

	it('renders without errors', () => {
		ReactDOM.render(<Accordion />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders empty with no sections by default', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	})

	it('opens any clicked section', () => {
    const singleItem = wrapper.find('button').at(1).simulate('click').simulate('click');
    expect(toJson(singleItem)).toMatchSnapshot();
  })

	it('opens one section at a time', () => {
		wrapper.find('button').forEach((button, index) => {
			button.simulate('click');
		});
		expect(toJson(wrapper)).toMatchSnapshot();
	});

});