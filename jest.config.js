module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      diagnostics: {
        warnOnly: true,
      },
    }],
  },
  testRegex: '((\\.|/)(spec))\\.(ts?)$',
  moduleFileExtensions: ['ts', 'js'],
  modulePaths: ['src'],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  preset: 'ts-jest',
};
