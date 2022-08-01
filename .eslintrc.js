module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'module-resolver', 'css-import-order'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    'plugin:css-import-order/recommended',
  ],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom/client',
            group: 'external',
            position: 'before',
          },
        ],
        groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': 1,
    'no-void': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'node/no-missing-import': 'off',
    'node/no-extraneous-import': 'off',
    'import/no-unresolved': ['off', { caseSensitive: false }],
  },
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'], // Your TypeScript files extension
  //     extends: [
  //       'plugin:@typescript-eslint/recommended',
  //       'plugin:@typescript-eslint/recommended-requiring-type-checking',
  //     ],

  //     parserOptions: {
  //       project: ['./tsconfig.json'], // Specify it only for TypeScript files
  //     },
  //   },
  // ],
};
