import React from 'react';
import './Card.css';

class Card extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			content: props.content,
			purchased: props.purchased
		};
	}

	togglePurchased() {
		this.setState(prevState => ({
		  purchased: !prevState.purchased
		}));
	}

	render() {
		return (
			<div 
				className={`Card ${this.state.purchased ? " purchased" : "" }`}
			>

				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
				<div className="Card-buttons">
					<button
						type="button"
						onClick={() => this.togglePurchased()}
					>
						Purchased
					</button>
					<button 
						type="button"
						onClick={() => this.props.onClickDelete(this.props.id)}
					>
						Remove
					</button>
					<button
						type="button"
						onClick={() => this.state.onClickSave(this.state.id)}
					>
						Save for Later
					</button>	
				</div>
			</div>
		)		
	}
}

Card.propTypes = {
  onClickDelete: () => {}
}

export default Card;