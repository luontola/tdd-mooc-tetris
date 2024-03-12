# Level 9: Scoring

> The player should receive points every time they manage to remove a row. And the more rows are removed at a time, the
> more points should be given them.

Implement a [scoring system](https://tetris.fandom.com/wiki/Scoring). The original Nintendo scoring system is quite
simple, but you may choose whichever you like.

Since there are many different scoring systems, and it also depends on the game level, it's best to keep the details of
scoring outside the `Board` class.

Use the [observer pattern](https://refactoring.guru/design-patterns/observer), so that the `Board` sends out
notifications about removed rows.
Using [test doubles](https://tdd.mooc.fi/3-challenges#test-doubles) the board can be
tested in isolation, without a scoring system.

Then implement the scoring rules as an object which listens for the notifications from `Board`.

## 91% done 🚀 [Continue to the next level](level-10.md)
