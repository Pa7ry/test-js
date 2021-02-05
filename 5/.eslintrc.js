module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedString: true,
            jsx: true,
        },
    },
    rules: {
        'no-plusplus': [
            'error', 
            { "allowForLoopAfterthoughts": true }
        ],
        'no-param-reassign': 'off',
        'max-len': 'off',
    }
};