module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'next/core-web-vitals',
        'plugin:tailwindcss/recommended',
        'prettier',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'semi': ['warn', 'always'],
        'quotes': ['error', 'single'],
        'no-undef': 'error',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
    'settings': {
        'react': {
            'version': 'detect'
        },
    }
};
