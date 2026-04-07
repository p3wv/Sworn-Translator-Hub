module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/artifacts/sworn-translator/src/pages/__tests__'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
