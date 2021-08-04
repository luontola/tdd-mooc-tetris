# Level 7: Rotation system change

> Did you know that Tetris has many different [rotation systems](https://tetris.wiki/Category:Rotation_systems)? This
> far we have used an informally-specified, ad hoc system. Let's change it to a well known rotation system.

Change the tetrominoes to use the [Arika Rotation System](https://tetris.wiki/Arika_Rotation_System), which is used for
example in the _Tetris: The Grand Master_ series:

![Arika Rotation System's basic rotations](images/tgm-rotations.png)

The design of our old `RotatingShape` doesn't anymore fit these new needs, because the T, L and J shapes no more rotate
around a single point. A better design could be to just hard-code the different orientations. That should also allow
removing quite much production and test code - [code is a liability](https://wiki.c2.com/?SoftwareAsLiability).

Some unrelated tests might break as a result of this change. That means that the tests were coupled to the choice of a
rotation system. Think about how the tests could be designed differently, so that they would not be affected by this
change.

## 🚀 [Continue to the next level](level-8.md)
