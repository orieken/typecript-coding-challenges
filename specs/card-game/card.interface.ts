import { CardValue } from './card-values.type';
import { Suit } from './suit.type';
export interface ValidCard {
  suit: Suit;
  value: CardValue;

  toString(): string;
}
export interface InvalidCard {
  suit: Suit;
  value: '1';
  toString(): string;
}
