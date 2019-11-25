import React from 'react';
import './Accordion.css';

class Accordion extends React.Component {
	static defaultProps = {
		sections: []
	};

	constructor(props) {
		super(props);
		this.state = {
			activeSection: null
		};
	};

	renderSection(section, id, activeSection) {
		return (
			<li
				className="Accordion-section"
				key={id}
			>
				<button
					type="button"
					onClick={() => {
						this.handleSectionSelect(id)
					}}
				>
					{section.title}
				</button>
				{(activeSection === id) &&
					<p>
						{section.content}
					</p>
				}
			</li>
		)
	}

	handleSectionSelect = (index) => {
		this.setState({
			activeSection: index
		})
	};

	render() {
		const { activeSection } = this.state;
		const { sections } = this.props;

		return (
			<div className="Accordion-wrapper">
				<h2>Accordion</h2>
				<ul className="Accordion">
					{sections.map((section, id) => (
						this.renderSection(section, id, activeSection)
					))}
				</ul>
			</div>
		)
	};
}

export default Accordion;