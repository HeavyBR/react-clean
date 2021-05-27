module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest' // Transform ts to js
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1', // Map SRC to @. Example: @/data, @/domain
    '\\.scss$': 'identity-obj-proxy' // Generate dummies for scss on Jest
  }
}
