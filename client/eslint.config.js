import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']), // Ignore build folder
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,          // Base JS recommended rules
      reactHooks.configs['recommended-latest'], // React hooks rules
      reactRefresh.configs.vite,       // Vite + React refresh rules
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Allow uppercase vars and "motion" to prevent false unused var errors
      'no-unused-vars': ['error', { varsIgnorePattern: '^(motion|[A-Z_])' }],

      // Optional: you can add more custom rules here
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect deps
    },
  },
]);
