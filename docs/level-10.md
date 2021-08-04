# Level 10: Randomness

> What is the most important behavior, which is not yet implemented?
>
> Tetris would not be fun if the tetrominoes always arrived in the same order. The order must be random.

Sometimes random is [too random](https://dilbert.com/strip/2001-10-25). Games often want predictable randomness, which
brings us to
the [shuffle bag](https://gamedevelopment.tutsplus.com/tutorials/shuffle-bags-making-random-feel-more-random--gamedev-1249)
algorithm:

1. Pick a range of values with the desired distribution
2. Put all these values into a bag
3. Shuffle the bag's contents
4. Pull the values out one by one until you reach the end
5. Once you reach the end, shuffle and start over

Implement a shuffle bag for randomizing the tetrominoes.

When the tests cannot assume the exact order of the randomized values, you will need to
do [property-based testing](https://increment.com/testing/in-praise-of-property-based-testing/)
and assert generic invariants instead of specific examples. (You won't need a property-based testing library here.)

## 🥳 That's all, folks
