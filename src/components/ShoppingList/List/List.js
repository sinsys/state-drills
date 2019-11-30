import React from 'react';
import Card from '../Card/Card';
import './List.css';


class List extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			list: this.props
		}
	}

	render() {
		return (
			<section className="List">
				<header className="List-header">
					<h2>{this.props.title}</h2>
				</header>
				<div className="List-cards">
					{this.props.cards.map((card, index) => {
						if(!card.saved){
							return (
								<Card
									key={this.props.title + "-id-" + card.id + "-index-" + index}
									id={card.id}
									title={card.title}
									content={card.content}
									purchased={false}
									onClickDelete={this.props.onClickDelete}
									onClickSavedCard={this.props.onClickSavedCard}
								/>							
							)
						}
						else return {}
					})}
					<button
						type="button"
						className="List-add-button"
						onClick={() => this.props.onClickAdd(this.props.id)}
					>
						+ Add Card
					</button>
				</div>
			</section>
		)			
	}

}

List.defaultProps = {
  onClickAdd: () => {},
  onClickSavedCard: () => {}
}

export default List;