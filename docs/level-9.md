# Level 9: Scoring

> The player should receive points every time they manage to remove a row. And the more rows are removed at a time, the
> more points should be given them.

Implement a [scoring system](https://tetris.fandom.com/wiki/Scoring).

Since there are many different scoring systems, and it also depends on the game level, it's best to keep the details of
scoring outside the `Board` class.

Use the [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern), so that the `Board` can send out
notifications about removed rows. It can be tested using [test doubles](https://martinfowler.com/bliki/TestDouble.html),
for example a spy.

Then implement the scoring rules as an object which listens for the notifications from `Board`.

## 🚀 [Continue to the next level](level-10.md)
