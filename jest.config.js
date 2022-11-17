/** @type {import('jest').Config} */
const jestConfig = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        diagnostics: {
          warnOnly: true,
        },
      },
    ],
  },
  testRegex: '((\\.|/)(spec))\\.(tsx?)$',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  modulePaths: ['src'],
  moduleNameMapper: {
    'chart.js': '<rootDir>/node_modules/chart.js/dist/chart.umd.js',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
};

module.exports = jestConfig;
