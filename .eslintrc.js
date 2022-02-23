module.exports = {
    extends: [
        "airbnb-base",
        "plugin:jest/recommended",
        "plugin:react/recommended",
    ],
    parser: "babel-eslint",
    env: {
        node: true,
        es6: true,
        browser: true,
        "jest/globals": true,
    },
    globals: {
        shallow: true,
        render: true,
        mount: true
    },
    rules: {
        "linebreak-style": 0,
        "max-len": "off",
        quotes: ["warn", "double"],
        "class-methods-use-this": 0,
        "no-underscore-dangle": 0,
        indent: ["error", 4],
        "no-param-reassign": [
            "error",
            {
                props: false,
            },
        ],
        "prefer-destructuring": "warn",
        "global-require": "warn",
        "import/no-dynamic-require": "warn",
        "no-plusplus": "warn",
        "react/prop-types": "warn",
        "comma-dangle": 0,
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
    },
    plugins: ["jest", "react"],
    settings: {
        react: {
            version: "17.0.2",
        },
    },
};
