import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';
import STORE from '../STORE.js';

describe('Card component', () => {
	const store = {STORE};
	const props = store.STORE.allCards['a'];

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Card
				id={props.id}
				title={props.title}
				content={props.content}
    	/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders the UI as expected', () => {
		const tree = renderer
			.create(<Card
				id={props.id}
				title={props.title}
				content={props.content}
    	/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

})