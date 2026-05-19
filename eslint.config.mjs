import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { fixupPluginRules } from '@eslint/compat';

// Fix plugins that are incompatible with ESLint v10
const fixedNextVitals = nextVitals.map((config) => {
  if (config.plugins && config.plugins.react) {
    return {
      ...config,
      plugins: {
        ...config.plugins,
        react: fixupPluginRules(config.plugins.react),
      },
    };
  }
  return config;
});

const eslintConfig = defineConfig([
  ...fixedNextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
