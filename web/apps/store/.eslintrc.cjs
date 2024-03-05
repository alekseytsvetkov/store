/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@store/lint/next')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
