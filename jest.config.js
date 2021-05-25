module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest' // Transform ts to js
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
