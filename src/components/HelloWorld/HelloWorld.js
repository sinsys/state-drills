import React from 'react';
import './HelloWorld.css';

class HelloWorld extends React.Component {
	static defaultProps = {
		who: "World",
		options: ["World", "friend", "React", "test", "stuff", "blah"]
	}
	constructor(props){
		super(props);
		this.state = {
			who: this.props.who
		}
	}
	updateText = (option) => {
		this.setState ({
			who: option
		})
	}
	render() {
		return (
			<div className="HelloWorld-wrapper">
				<h2>Hello World + Interactivity</h2>
				<p>Hello, {this.state.who}!</p>
				{this.props.options.map((option) => (
					<button 
						key={option}
						onClick={() => this.updateText(option)}>
						{option}
					</button>
				))}
			</div>
		)
	}
}

export default HelloWorld;