import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

const config = [
  {
    ignores: ["build", "dist", "node_modules", "coverage"],
  },

  // JS + React Configuration
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
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
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },
  },

  // Jest Configuration
  {
    files: ["**/*.test.{js,jsx}", "**/*.spec.{js,jsx}"],
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

  // Prettier Override (Always Last)
  eslintConfigPrettier,
];

export default config;
