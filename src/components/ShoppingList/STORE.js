export default {
  lists: [
    {
      id: '1',
      header: 'Daily',
      cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
    },
    {
      id: '2',
      header: 'Weekly',
      cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
    },
    {
      id: '3',
      header: 'Monthly',
      cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
    },
    {
      id: '4',
      header: 'Seasonal',
      cardIds: [ 'l', 'm' ],
    },
    {
      id: '5',
      header: 'Saved',
      cardIds: [],
    },
  ],
  allCards: {
    'a': { id: 'a', title: 'First card', content: 'lorem ipsum', saved: false },
    'b': { id: 'b', title: 'Second card', content: 'lorem ipsum', saved: false },
    'c': { id: 'c', title: 'Third card', content: 'lorem ipsum', saved: false },
    'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum', saved: false },
    'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum', saved: false },
    'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum', saved: false },
    'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum', saved: false },
    'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum', saved: false },
    'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum', saved: false },
    'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum', saved: false },
    'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum', saved: false },
    'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum', saved: false },
    'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum', saved: false },
  }
}