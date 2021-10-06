// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  resetMocks: false,
  setupFilesAfterEnv: [
    '<rootDir>/config/test/jestSetup.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/fixtures/',
    '/dist/'
  ],
  testRegex: '/__tests__/.*\\.(test|spec)\\.[jt]sx?$',
  modulePaths: [
    './src'
  ],
  moduleNameMapper: {
    '\\.(css|svg)$': 'identity-obj-proxy',
    '^config(.*)$': '<rootDir>/config$1'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/test/jestAssetsTransformer.js'
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
}
