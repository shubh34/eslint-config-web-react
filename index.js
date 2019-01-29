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
        'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
        "no-shadow":0,
        'import/no-extraneous-dependencies': 0,
        "indent": ["error", 2, "tab"],
        "no-trailing-spaces": "error",
        "eol-last": ["error", "always"]
     
    }
};