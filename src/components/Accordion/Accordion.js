import React from 'react';
import './Accordion.css';
import Tabs from '../Tabs/Tabs';

class Accordion extends React.Component {
	
	static defaultProps = {

	};

	constructor(props){
		super(props);
		this.state = {

		}
	};

	render() {
		return (
			<div>
				<h2>Accordion</h2>
				<Tabs 
					key="tabs-1" />
			</div>
		)
	};
}

export default Accordion;