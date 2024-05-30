# Level 5: Moving falling tetrominoes

> What is the most important behavior, which is not yet implemented?
>
> A game isn't much fun if you can't control it. As the next step, let's make it possible for the player to move the
> falling tetrominoes left, right and down.

It's time to write your own tests. Here are some example test names, which should be enough to cover all the corner
cases:

- a falling tetromino can be moved left
- a falling tetromino can be moved right
- a falling tetromino can be moved down
- it cannot be moved left beyond the board
- it cannot be moved right beyond the board
- it cannot be moved down beyond the board (will stop falling)
- it cannot be moved left through other blocks
- it cannot be moved right through other blocks
- it cannot be moved down through other blocks (will stop falling)

Remember to follow the [three laws of TDD](https://tdd.mooc.fi/1-tdd#three-laws-of-tdd) and not write more than one
failing test before making it pass.

Also remember to follow the [red-green-refactor](https://tdd.mooc.fi/1-tdd#red-green-refactor) cycle. In particular, run
each test immediately after writing it, so that you will *see it fail*. That's important for "testing the test", to
ensure that the test is testing what you think it's testing, and that the failure message is understandable.

## 55% done 🚀 [Continue to the next level](level-6.md)
