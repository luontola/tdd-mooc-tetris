# Level 2: Rotating shapes

> What is the most important behavior, which is not yet implemented?
>
> You can't have a Tetris without rotating tetrominoes. As a [stepping stone](https://tdd.mooc.fi/2-design#four-strategies)
> for that, let's create an algorithm which rotates arbitrary 3×3 and 5×5 block shapes. That should cover the needs of
> all sizes of tetrominoes.

Open the [test/RotatingShapes.test.mjs](../test/RotatingShapes.test.mjs) file and implement its tests one by one.

The `RotatingShape` class is meant to be [immutable](https://en.wikipedia.org/wiki/Immutable_object).

Little algorithms like this rotation can be derived using just TDD. First write the simplest thing that could possibly
work: copy each block individually to its rotated position (~9 lines of code). Then remove duplication to produce a
generic algorithm (~1 line of code).

## 18% done 🚀 [Continue to the next level](level-3.md)
