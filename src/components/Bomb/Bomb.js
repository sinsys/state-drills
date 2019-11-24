import React from 'react';
import './Bomb.css';

class Bomb extends React.Component {
	static defaultProps = {
		timerStrings: ["tick", "tock"],
		counter: 8
	};

	constructor(props){
		super(props);
		this.state = {
			counter: this.props.counter
		}
	}

	componentDidMount() {
		this.startBomb();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	displayText() {
		const {counter} = this.state;
		if(counter <= 0) {
			clearInterval(this.interval);
			return "BOOM!!!!!";
		}
		if(counter % 2 === 0){
			return this.props.timerStrings[0];
		} else if(counter % 2 === 1){
			return this.props.timerStrings[1];
		}
	}

	restartBomb() {
		if(this.interval){
			clearInterval(this.interval);
		}
		this.setState({
			counter: 8
		})
		this.startBomb();
	}

	startBomb() {
		this.interval = setInterval(() => {
			this.setState({
				counter: this.state.counter -1
			})
		}, 1000)		
	}

	render() {
		return (
			<div>
				<h2>Da Bomb</h2>
				<p>{this.state.counter}</p>
				<p>{this.displayText()}</p>
				<button
					onClick={() => this.restartBomb()}>
					Restart Bomb
				</button>
			</div>
		)
	}
}

export default Bomb;