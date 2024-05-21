module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-await-in-loop': 'off',
    'vue/no-multiple-template-root': 'off',
    'prefer-const': [
      'off',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'require-await': 'off',
    'dot-notation': 'off',
    'no-underscore-dangle': 'off',
    'import/newline-after-import': 'off',
    'no-continue': 'off',
    'no-empty': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-mutating-props': 'off',
    'vue/attributes-order': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'no-param-reassign': 'off',
    'no-void': 'off',
    'object-shorthand': 'off',
    'no-alert': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'arrow-body-style': 'off',
    'no-restricted-globals': 'off',
    'no-else-return': 'off',
    'consistent-return': 'off',
    'vue/attribute-hyphenation': 'off',
    'no-lonely-if': 'off',
    'no-throw-literal': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'prefer-destructuring': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'vue/no-setup-props-destructure': 'off',
    'max-len': [
      'warn',
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
};
