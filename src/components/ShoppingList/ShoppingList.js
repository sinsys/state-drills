import React from 'react';
import List from './List/List';
import './ShoppingList.css';
import STORE from './STORE';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class ShoppingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store: STORE
    }

    this.handleDeleteCard = (cardId) => {
      const { lists, allCards } = this.state.store;

      const newLists = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));

      const newCards = omit(allCards, cardId);

      this.setState({
        store: {
          lists: newLists,
          allCards: newCards
        }
      })
    };

    this.handleSavedCard = (cardId) => {
      const { lists, allCards } = this.state.store;
      console.log(cardId);
      const newLists = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId),
        saved: list.cardIds.cardId
      }));

      const newCards = omit(allCards, cardId);

      this.setState({
        store: {
          lists: newLists,
          allCards: newCards
        }
      })
    };

    this.handleAddCard = (listId) => {
      const newCard = newRandomCard()

      const newLists = this.state.store.lists.map(list => {
        if (list.id === listId) {
          return {
            ...list,
            cardIds: [...list.cardIds, newCard.id]
          };
        }
        return list;
      })

      this.setState({
        store: {
          lists: newLists,
          allCards: {
            ...this.state.store.allCards,
            [newCard.id]: newCard
          }
        }
      })
    };

  };



  render(){
    const { store } = this.state;
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
              id={list.id}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
              onClickSaveCard={this.handleSavedCard}
            />
          ))}
        </section>
        
      </main>
    )
  }
}

export default ShoppingList;