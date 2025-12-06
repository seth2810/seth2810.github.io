import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export default defineConfig([
  {
    extends: [...nextCoreWebVitals],

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      ecmaVersion: 13,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      semi: 'error',
    },
  },
]);
