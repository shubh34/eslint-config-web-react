module.exports = {
    extends: 'airbnb',
    "parser": "babel-eslint",
    "parserOptions": {
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    "env": {
        "jest": true,
        "browser": true
    },
    rules: {
        "react/jsx-filename-extension": 0,
        "no-shadow":0,
    }
};