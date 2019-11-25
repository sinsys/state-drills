import React from 'react';
import './Tabs.css';

class Tabs extends React.Component {

	static defaultProps = {
		tabs: []
	};

	constructor(props) {
		super(props);
		this.state = {
			currentTabIndex: 0
		};
	};

	renderButtons() {
		return (
			this.props.tabs.map((tab, index) => (
			<button
				key={index}
				onClick={() => this.handleButtonClick(index)}
			>
				{tab.name}
			</button>
		)));
	};

	renderContent() {
		const currentTab = this.props.tabs[this.state.currentTabIndex];
		return (
			<div className="content">
				{currentTab.content}
			</div>
		)
	};

	handleButtonClick = (index) => {
		this.setState({
			currentTabIndex: index
		})
	};

	render() {
		return (
			<div className="Tabs-wrapper">
				<h2>Tabs</h2>
				{this.renderButtons()}
				{!!this.props.tabs.length && this.renderContent()}
			</div>
		)
	}
}

export default Tabs;