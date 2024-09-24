module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-swiper|react-redux|react-native-linear-gradient|@react-navigation|@react-native|@react-native/assets|react-native-extra-dimensions-android|react-native-device-info|prop-types)/)',
  ],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  collectCoverage: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.tsx',
    'react-native-responsive-fontsize':
      '<rootDir>/__mocks__/react-native-responsive-fontsize.tsx',
    'react-native-size-matters':
      '<rootDir>/__mocks__/react-native-size-matters.tsx',
    '^react-native-device-info$':
      '<rootDir>/__mocks__/react-native-device-info.js',
    '^react-native-iphone-x-helper$':
      '<rootDir>/__mocks__/react-native-iphone-x-helper.js',
    '^react-native-vector-icons/(.*)$':
      '<rootDir>/__mocks__/react-native-vector-icons.js',
  },
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/navigation/*.{js,jsx,ts,tsx}',
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
