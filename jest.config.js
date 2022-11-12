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
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
};

module.exports = jestConfig;
