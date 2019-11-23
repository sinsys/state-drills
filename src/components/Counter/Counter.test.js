import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Counter />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	it.skip('ui renders as expected', () => {
		expect(
			renderer.create(<Counter />).toJSON()
		).toMatchSnapshot()
	});
});