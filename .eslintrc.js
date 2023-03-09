module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "no-confusing-arrow": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "react/react-in-jsx-scope": 0,
    "operator-linebreak": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-one-expression-per-line": 0,
    "comma-dangle": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "import/no-extraneous-dependencies": 0,
  },
};
