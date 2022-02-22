# Level 4: Falling tetrominoes

> Previously we have implemented falling blocks and rotating tetrominoes. Let's put them now together.

Open the [test/FallingTetrominoes.test.mjs](../test/FallingTetrominoes.test.mjs) file and implement its tests one by
one.

The `Board` class needs to be updated to work with complex block shapes. You will need to check and update every place
where the old code assumes 1×1 blocks (and a 3×3 board).

It may be useful to temporarily disable the one failing test, so that you can refactor on green.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">for each desired change, make the change easy (warning: this may be hard), then make the easy change</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/250733358307500032?ref_src=twsrc%5Etfw">September 25, 2012</a></blockquote>

When refactoring, it's important to work in small steps and run the tests after every change. If it has been more than a
few minutes since the tests last passed, you're about to enter [refactoring hell](https://wiki.c2.com/?RefactoringHell),
and it's faster to revert to the last known working state (`git reset --hard`) and try again with even smaller steps.

P.S. It may be helpful to do the [small steps exercise](https://github.com/luontola/tdd-mooc-small-steps)
before this one.

## 🚀 [Continue to the next level](level-5.md)
