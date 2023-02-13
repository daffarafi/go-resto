module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jasmine: true,
    'codeceptjs/codeceptjs': true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral *'] }],
    'no-param-reassign': [2, { props: false }],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'off',
      {
        js: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: { config: 'webpack.common.js' },
    },
  },
  plugins: ['jasmine', 'codeceptjs'],
};
