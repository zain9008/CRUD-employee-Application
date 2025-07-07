module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Disable rules that might cause problems
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
