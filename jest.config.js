module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest-setup.ts'],
  testMatch: ['**/*.test.ts?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/cypress'],
}
