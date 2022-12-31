import { Suit } from './suit.type';
import { CardValue } from './card-values.type';

export class Card {
  public suit: Suit;
  public value: CardValue;

  constructor(suit: Suit, value: CardValue) {
    this.suit = suit;
    this.value = value;
  }

  toString(): string {
    return `${this.value} of ${this.suit}`;
  }
}
