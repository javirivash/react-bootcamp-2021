import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const config = [
  // Recommended settings from ESLint
  js.configs.recommended,

  // React Configuration
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Jest Configuration
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
];

export default config;
