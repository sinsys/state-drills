import React from 'react';

class Counter extends React.Component {
	static defaultProps = {
		count: 0,
		step: 1
	}
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	addCount = () => { 
		this.setState({
			count: this.state.count + this.props.step
		})
	}
	render() {
		return (
			<div className="Counter">
				<h2>Counter Test</h2>
				<p>The current count: {this.state.count}</p>
				<button
					onClick={this.addCount}>
					Add +{this.props.step}
				</button>
			</div>
		)
	}
}
export default Counter;