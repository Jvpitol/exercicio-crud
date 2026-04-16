import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off', 
      'quotes': ['error', 'single'], 
      'semi': ['error', 'always'], 
      'indent': ['error', 2], 
      'no-unused-vars': 'warn', 
    }
  }
];