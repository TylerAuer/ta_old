const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/src/',
});

module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    // Mock style sheets
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    // Mock static assets
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    // Support paths from tsconfig
    ...paths,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`, // Required for some DOM APIs like local storage
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};
