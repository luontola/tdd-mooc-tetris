/** @type {import("vite").UserConfig} */
export default {
  test: {
    setupFiles: ["test/testing.mjs"],
    passWithNoTests: true,
    forceRerunTriggers: ["**"],
  },
};
