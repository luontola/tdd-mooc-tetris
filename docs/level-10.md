# Level 10: Randomness

> What is the most important behavior, which is not yet implemented?
>
> Tetris would not be fun if the tetrominoes always arrived in the same order. The order must be random.

Sometimes random is [too random](https://web.archive.org/web/20230304094645/https://dilbert.com/strip/2001-10-25). Games
often want predictable randomness, which brings us to
the [shuffle bag](https://gamedevelopment.tutsplus.com/tutorials/shuffle-bags-making-random-feel-more-random--gamedev-1249)
algorithm:

1. Pick a range of values with the desired distribution
2. Put all these values into a bag
3. Shuffle the bag's contents
4. Pull the values out one by one until you reach the end
5. Once you reach the end, shuffle and start over

Implement a shuffle bag for randomizing the tetrominoes. Later it can be used to feed tetrominoes to the board in random
order.

When the tests cannot assume the exact order of the randomized values, you will need to
do [property-based testing](https://increment.com/testing/in-praise-of-property-based-testing/)
and assert generic invariants instead of specific examples. (You won't need a property-based testing library here.)
See the course material's discussion on [testing randomness](https://tdd.mooc.fi/3-challenges#randomness).

## 100% done 🥳

Obviously the game is not yet complete, because the game loop and UI are missing. However, since testing the UI is much
harder than testing pure business logic, it's left outside this exercise.

There is a minimal UI at [src/index.mjs](../src/index.mjs), which you should be able to update to work with your code
after some minor modifications. Start the UI with `npm run start` and do some manual testing to see if you overlooked
some edge cases when writing your tests.
