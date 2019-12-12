module.exports = {
  roots: ["<rootDir>/src"],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/__utils", "/mock-data"],
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
