export const Suits = ['Heart', 'Club', 'Diamond', 'Spade'] as const;

export type Suit = typeof Suits[number];
