import React from 'react';

// USING CONSTRUCTOR AND SUPER //

// class Counter extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		};
// 	}
// 	addCount = () => { 
// 		const newCount = this.state.count + 1;
// 		this.setState({
// 			count: newCount
// 		})
// 		console.log(this.state.count);
// 	};
// 	render() {
// 		return (
// 			<div className="Counter">
// 				<p>The current count: {this.state.count}</p>
// 				<button
// 					onClick={this.addCount}>
// 					Add +1
// 				</button>
// 			</div>
// 		)
// 	}
// }

// USING STATE WITHOUT CONSTRUCTOR //

class Counter extends React.Component {
	static defaultProps = {
		count: 0,
		step: 1
	}
	constructor(props) {
		console.log("Our props are: " + props);
		super(props);
		this.state = {
			count: 0
		};
	}
	addCount = () => { 
		this.setState({
			count: this.state.count + this.props.step
		})
	};
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