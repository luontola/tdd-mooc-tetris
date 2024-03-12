# Level 3: Rotating tetrominoes

> Previously we figured out a way to rotate 3×3 and 5×5 block shapes. Now with the help of that, it should be easier to
> implement rotating tetrominoes.

Open the [test/RotatingTetrominoes.test.mjs](../test/RotatingTetrominoes.test.mjs) file and implement its tests one by
one.

The `Tetromino` class is meant to be [immutable](https://en.wikipedia.org/wiki/Immutable_object).

There are tests only for the T, I and O [tetrominoes](https://tetris.fandom.com/wiki/Tetromino), because that's enough
to drive the implementation (4, 2 and 1 orientations). You may test the rest of the tetrominoes yourself if you want,
but if you create a design where the different shapes are just declarative configuration and their tests would just
duplicate what the configuration already says, then you can have fewer tests.

P.S. You might be tempted to make `Tetromino` inherit `RotatingShape`, but it's better
to [favor composition over inheritance](https://www.artima.com/articles/design-principles-from-design-patterns), to
avoid the tight coupling between a subclass and its superclass. There's also
the [Liskov Substitution Principle](https://davesquared.net/2009/01/introduction-to-solid-principles-of-oo.html)
which every inheritor should follow to avoid breaking things.

## 27% done 🚀 [Continue to the next level](level-4.md)
