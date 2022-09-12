// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'plugin:react/recommended',
    'semistandard',
    'plugin:compat/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'standard-with-typescript',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true
  },
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    '@emotion',
    'jsx-a11y',
    'react',
    'strict-null-checks',
    '@typescript-eslint',
    'react-hooks'
  ],
  rules: {
    'strict-null-checks/all': 'warn',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    indent: ['error', 2],
    '@typescript-eslint/no-floating-promises': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'template-curly-spacing': ['error', 'never'],
    'no-void': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'react/prop-types': 'warn',
    'react/display-name': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/react-in-jsx-scope': 'off',
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-null': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/prefer-object-from-entries': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          props: true
        }
      }
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        },
        ignore: [
          '.*CV.*\\.js$',
          '.*FAQ.*\\.js$',
          'service-worker.js'
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
