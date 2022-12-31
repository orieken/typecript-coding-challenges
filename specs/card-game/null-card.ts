import { InvalidCard } from './card.interface';
import { Suit } from './suit.type';

export class NullCard implements InvalidCard {
  suit: Suit;
  value: '1';
  constructor() {
    this.suit = 'Heart';
    this.value = '1';
  }

  toString(): string {
    return 'Null Card';
  }
}
