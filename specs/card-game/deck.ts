import { NullCard } from './null-card';
import { Card } from './card';
import { CardValue, CardValues } from './card-values.type';
import { Suit, Suits } from './suit.type';

export class Deck {
  public cards: Card[] = [];

  constructor() {
    const suits: Suit[] = [...Suits];
    const values: CardValue[] = [...CardValues];
    for (const suit of suits) {
      for (const value of values) {
        this.shuffle();
        this.cards = [...this.cards, new Card(suit, value)];
      }
    }
  }

  shuffle(): void {
    this.cards = this.cards.sort(() => Math.random() - 0.5);
  }

  dealHand(numberOfCards: number): Card[] {
    // numberOfCards is greater than the number of cards in the deck return an empty array
    if (numberOfCards > this.cards.length) {
      return [];
    }

    const hand: Card[] = [Array.from({ length: numberOfCards }, () => this.getValidCard())].flat();
    return hand;
  }

  deal(): Card {
    return this.getValidCard();
  }

  getValidCard(): Card {
    const card = this.sample(this.cards);
    if (card instanceof NullCard) {
      return this.getValidCard();
    }
    this.cards = this.cards.filter(c => c !== card);
    return card;
  }

  private sample(cards: Card[]): Card | NullCard {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    if (card) {
      return card;
    }
    return new NullCard();
  }
}