module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        // vue
        'plugin:vue/vue3-strongly-recommended',
        // js
        'eslint:recommended'
    ],
    parserOtions: {
        parser: 'babel-eslint'
    },
    rules: {}
}