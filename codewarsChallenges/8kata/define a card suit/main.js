/* You get any card as an argument. Your task is to return the 
suit of this card (in lowercase).

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {
    for (let i = 0; i < card.length; i++){
      if(card[i] === '♣'){
        return 'clubs';
      } else if(card[i] === '♦'){
        return 'diamonds';
      } else if(card[i] === '♥'){
        return 'hearts';
      } else if(card[i] === '♠'){
        return 'spades';
      }
    }
  }