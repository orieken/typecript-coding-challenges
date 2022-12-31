import { Deck } from './deck';
import { Card } from './card';

describe('Deck', () => {
  it('should be able to create a deck', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
  });

  it('should be able to shuffle a deck', () => {
    const deck = new Deck();
    const beforeShuffle = [...deck.cards];
    deck.shuffle();
    expect(beforeShuffle).not.toEqual(deck.cards);
  });

  it('should be able to deal a card', () => {
    const deck = new Deck();
    const card = deck.deal();
    expect(deck.cards.length).toBe(51);
    expect(card).toBeInstanceOf(Card);
  });

  it('should be able to deal a hand', () => {
    const deck = new Deck();
    const hand = deck.dealHand(5);
    expect(deck.cards.length).toBe(47);
    expect(hand.length).toBe(5);
    expect(hand).toEqual(expect.arrayContaining([expect.any(Card)]));
  });

  it('should return Empty hand if not enough cards to deal', () => {
    const deck = new Deck();
    const hand = deck.dealHand(53);
    expect(deck.cards.length).toBe(52);
    expect(hand.length).toBe(0);
    expect(hand).toEqual(expect.arrayContaining([]));
  });
});