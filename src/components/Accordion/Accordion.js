import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
	static defaultProps = {
		sections: []
	};

	constructor(props) {
		super(props);
		this.state = {

		};
	};

	renderItems() {
		return (
			<ul className="Accordion-tabs">

			</ul>
		)
	}

	render() {
		return (
			<div className="Accordion-wrapper">
				<h2>Accordion</h2>
			</div>
		)
	};
}

export default Accordion;