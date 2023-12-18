declare module "chai" {
  global {
    export namespace Chai {
      interface Assertion {
        equalShape(shape: string): void;
      }
    }
  }
}
