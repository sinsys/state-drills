import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from '../STORE.js';

describe('List component', () => {
	const store = {STORE};
	const props = store.STORE.lists[0];

	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<List 
				key={"list-" + props.id}
      	title={props.header}
      	cards={props.cardIds.map(card => store.STORE.allCards[card])}
    	/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders the UI as expected', () => {
		const tree = renderer
			.create(<List 
				key={"list-" + props.id}
      	title={props.header}
      	cards={props.cardIds.map(card => store.STORE.allCards[card])}
    	/>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
})