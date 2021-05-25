import {expect} from "chai";
import {hello} from "../src/hello.js";

it("hello world", function () {
  expect(hello("world")).to.eq("Hello world");
});
