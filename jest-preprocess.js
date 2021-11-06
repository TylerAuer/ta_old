const babelOptions = {
  presets: [
    'babel-preset-gatsby',
    '@babel/preset-typescript',
    // With React 17x, "import React from 'react'" is no longer needed in files. But,
    // it is needed for testing. The next line configures babel to use "automatic" react
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
