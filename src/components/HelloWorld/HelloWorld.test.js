import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HelloWorld />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	it('ui renders as expected', () => {
		expect(
			renderer.create(<HelloWorld />).toJSON()
		).toMatchSnapshot()
	});
});