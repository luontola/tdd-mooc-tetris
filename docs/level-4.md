# Level 4: Falling tetrominoes

> Previously we have implemented falling blocks and rotating tetrominoes. Let's put them now together.

Open the [test/FallingTetrominoes.test.mjs](../test/FallingTetrominoes.test.mjs) file and implement its tests one by
one.

The `Board` class needs to be updated to work with complex block shapes. You will need to find and update every place
where the old code assumes 1×1 blocks (and a 3×3 board). Create an appropriate abstraction so that the same code works
for all block shapes. For example, extract the 1×1 block (which is used in `FallingBlocks.test.mjs`) into a class which
has the same interface as the tetrominoes, but whose width and height are 1.

It may be useful to temporarily disable the one new failing test, so that you can refactor while all tests are passing.
Then refactor with the goal of making the next test easier to pass.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">for each desired change, make the change easy (warning: this may be hard), then make the easy change</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/250733358307500032?ref_src=twsrc%5Etfw">September 25, 2012</a></blockquote>

When refactoring, it's important to work in small steps and run the tests after every change. If it has been more than a
few minutes since the tests last passed, you're about to enter [refactoring hell](https://wiki.c2.com/?RefactoringHell).
Then it's faster to revert to the last known working state (`git reset --hard`) and try again with even smaller steps.

Remember the [small steps exercise](https://github.com/luontola/tdd-mooc-small-steps). Try to make as small changes as
there, changing only a few lines at a time between running tests. If the tests fail, undo your changes and try another
tiny change.

After this level you should have enough code for [duplication](https://tdd.mooc.fi/2-design#duplication) to start
becoming an issue. Go through
the [sparrow decks](https://llewellynfalco.blogspot.com/p/sparrow-decks.html) for duplication, and maybe also the other
code smells, to train your ability to detect code smells. Then read through your code looking for duplication, and
refactor to remove it.

## 45% done 🚀 [Continue to the next level](level-5.md)
