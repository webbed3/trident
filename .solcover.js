module.exports = {
  testCommand: "yarn test",
  compileCommand: "yarn build",
  skipFiles: [
    "interfaces",
    "examples",
    "flat",
    "libraries/DyDxMath",
    "libraries/FullMath",
    "libraries/MathUtils",
    "libraries/SafeCast",
    "libraries/SwapLib",
    "libraries/TickMath",
    "libraries/Ticks",
    "libraries/UnsafeMath",
    "migration",
    "mocks",
    "pool/concentrated",
    "pool/franchised",
    "pool/hybrid",
    "pool/index",
    "abstract/TridentERC721",
    // Covered elsewhere
    "abstract/Batchable",
    "abstract/SelfPermit",
    "TridentOwnable",
  ],
  mocha: {
    fgrep: "[skip-on-coverage]",
    invert: true,
  },
};
