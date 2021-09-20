module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};