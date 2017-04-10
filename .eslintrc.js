module.exports = {
  "env": {
    "shared-node-browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    }
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-unused-vars": ["error", {
      "args": "none"
    }]
  },
  "plugins": [
    "react",
    "standard"
  ]
};
