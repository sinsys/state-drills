import React from 'react';
import './RouletteGun.css';

class RouletteGun extends React.Component {
	static defaultProps = {
		statusValues: ["Spinning the chamber and pulling the trigger!", "You're safe!", "BANG!!!!"],
		bulletsInChamber: 8,
		selectedChamber: Math.ceil(Math.random() * 8)
	}

	constructor(props){
		super(props);
		this.state = {
			statusText: this.props.statusValues[1],
			spinningTheChamber: false,
			chamber: null
		};
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	pullTrigger = () => {
		this.setState({
			spinningTheChamber: true
		})
		const randomChamber = Math.ceil(Math.random() * 8);
		this.timeout = setTimeout(() => {
			this.setState({
				chamber: randomChamber,
				spinningTheChamber: false
			})
		}, 2000);
	}

	updateText() {
		const {chamber, spinningTheChamber} = this.state;
		const {selectedChamber} = this.props;
		if(spinningTheChamber) {
			return this.props.statusValues[0];
		} else if(chamber !== selectedChamber) {
			return this.props.statusValues[1];
		} else {
			return this.props.statusValues[2];
		}
	}
	render() {
		return (
			<div className="RouletteGun-wrapper">
				<h2>Roulette Gun</h2>
				<p>{this.updateText()}</p>
				<div>Selected Chamber: {this.state.chamber}</div>
				<div>Bullet Chamber: {this.props.selectedChamber}</div>
				<button
					onClick={this.pullTrigger}>
					Pulling the trigger!
				</button>
			</div>
		)
	}
}

export default RouletteGun;