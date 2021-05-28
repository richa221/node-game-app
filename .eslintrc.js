module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["google"],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ["bootstrap**", "package.json", "package-lock.json", "*.html", "custom.css"],
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "camelcase": "off",
    "no-console": "error",
    "no-debugger": "error",
    "linebreak-style": 0,
    "require-jsdoc": 0,
    "max-len": ["error", {code: 120}],
  },
};
