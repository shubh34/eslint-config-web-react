module.exports = {
    extends: 'airbnb',
    "parser": "babel-eslint",
    "parserOptions": {
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    rules: {
        "react/jsx-filename-extension": 0,
    }
};