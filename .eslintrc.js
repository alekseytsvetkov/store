/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('./tooling/config-eslint/node')],
  ignorePatterns: [
    'web/apps/**',
    'web/packages/**',
    'web/tooling/**',
    'next-env.d.ts',
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
