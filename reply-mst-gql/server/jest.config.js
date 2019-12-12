module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "((\\.|/)(test|spec))\\.[jt]sx?$",
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
