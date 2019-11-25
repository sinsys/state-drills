import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("Accordion component", () => {

	it('renders without errors', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Accordion />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

});