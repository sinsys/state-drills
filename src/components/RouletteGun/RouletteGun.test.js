import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RouletteGun from './RouletteGun';

describe('RouletteGun Component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<RouletteGun />, div);
		ReactDOM.unmountComponentAtNode(div);
	})

	it.skip('ui renders as expected', () => {
		expect(
			renderer.create(<RouletteGun />).toJSON()
		).toMatchSnapshot()
	});
});