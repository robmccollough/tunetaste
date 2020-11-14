module.exports = {
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    parser: "babel-eslint",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["react", "prettier"],
    extends: [
      "airbnb",
      "plugin:react/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "prettier",
      "prettier/react",
    ],
    rules: {
      "import/extensions": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
      "prettier/prettier": "error",
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["~"],
        },
      },
    },
  };