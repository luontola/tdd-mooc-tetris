// @ts-ignore
declare global {
  export namespace Chai {
    interface Assertion {
      equalShape(shape: string): void;
    }
  }
}
