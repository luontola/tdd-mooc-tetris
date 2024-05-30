# [TDD MOOC](https://tdd.mooc.fi): Tetris

In this exercise you will be implementing a Tetris game using Test-Driven Development (TDD). The first couple dozen
tests have already been written for you - just uncomment them one by one. This should help to get over the initial
hurdle of knowing what tests to write when getting started with TDD. After that you'll be eased into writing your own
tests.

The instructions on what to do are in the [docs directory](docs/). This exercise is split into 10 "levels" which you
should implement in order. They represent a realistic TDD approach of adding features incrementally.

To get you used to working in [small, safe steps](https://tdd.mooc.fi/2-design#small-safe-steps), there is the
test [TrainingWheels.test.mjs](test/TrainingWheels.test.mjs) which will fail if you change more than 10 lines of
production code at a time (similar to the [previous exercise](https://github.com/luontola/tdd-mooc-small-steps)). Make
it your goal to keep all the tests passing after every change, and commit only when the tests are passing.

Refer to [the course material](https://tdd.mooc.fi) to learn more about TDD.

## 🚀 [Start the exercise](docs/level-0.md)

---

_This exercise is part of the [TDD MOOC](https://tdd.mooc.fi) at the University of Helsinki, brought to you
by [Esko Luontola](https://twitter.com/EskoLuontola) and [Nitor](https://nitor.com/)._

## Tooling

This exercise uses [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
the [Vitest](https://vitest.dev/) testing framework and [Chai](https://www.chaijs.com/) assertions, but the concepts are
language agnostic. It would be quite easy to translate the example tests to another programming language as you go.
There also exists an older [Java-based predecessor](https://github.com/luontola/tdd-tetris-tutorial) of this exercise.

If you'd prefer the static types of [TypeScript](https://www.typescriptlang.org/) over JavaScript, you can rename the
files from `*.mjs` to `*.ts` and things should work. (Please create an issue or PR if the TypeScript config needs
changes that would benefit all students; the TS support was added only recently.)

## Prerequisites

You'll need a recent [Node.js](https://nodejs.org/) version. Then download this project's dependencies with:

    npm install

## Developing

Run tests once

    npm run test

Run tests continuously

    npm run autotest

Start a web UI for playing the game at http://127.0.0.1:8080

    npm run start

Code reformat

    npm run format
