module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest' // Transform ts to js
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1' // Map SRC to @. Example: @/data, @/domain
  }
}
