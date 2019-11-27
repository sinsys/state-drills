import React, {Component} from 'react';
import List from './List/List';
import './ShoppingList.css';

class ShoppingList extends Component {
  static defaultProps = {
    store: {
      lists: [],
      cards: {}
    }
  }

  render(){
    const {store} = this.props;
    return (
      <main className="Shopping-list">
        <header className="Shopping-list-header">
          <h1>TrellOhNo!</h1>
        </header>
        <section className="Shopping-list-list">
          {store.lists.map((list) => (
            <List
              title={list.header}
              cards={list.cardIds.map(card => store.allCards[card])}
              key={"list-" + list.id}
            />
          ))}
        </section>
        
      </main>
    )
  }
}

export default ShoppingList;