import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {

	static defaultProps = {
		tabs: [
		  { name: 'First tab',
		    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
		  { name: 'Second tab',
		    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		  { name: 'Third tab',
		    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' }
		]
	};

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {

		const buttons = this.props.tabs.map((tab, index) => (
			<button
				key={index}>
				{tab.name}
			</button>
		));

		return (
			<div className="Tabs-wrapper">
				{buttons}
			</div>
		)
	}
}

export default Tabs;