import { test } from "vitest";
import { expect } from "chai";
import util from "node:util";
import fs from "node:fs";

const exec = util.promisify(require("child_process").exec);

const changedLinesLimit = 10;

test("📎 Looks like you are changing lots of production code at a time. Prefer working in small, safe steps.", async () => {
  const { stdout } = await exec("git diff --numstat -- src");

  const changes = stdout
    .split("\n")
    .map((line) => line.split("\t"))
    .filter((parts) => parts.length === 3)
    .map(([added, removed, _filename]) => Math.max(parseInt(added, 10), parseInt(removed, 10)))
    .reduce((a, b) => a + b, 0);

  expect(changes, "number of changed lines").to.be.lessThanOrEqual(changedLinesLimit);
});

test(`documentation is in sync with the ${changedLinesLimit} lines limit`, () => {
  const readme = fs.readFileSync("README.md", "utf8").replaceAll("\n", " ");

  expect(readme).to.contain(
    `will fail if you change more than ${changedLinesLimit} lines of production code at a time`
  );
});
