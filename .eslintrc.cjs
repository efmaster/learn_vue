module.exports = {
    root: true,
    extends: [
        '@nuxtjs/eslint-config-typescript',
        '@vue/eslint-config-airbnb-with-typescript',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended', // muss man wissen, ob man das möchte
    ],
    overrides: [
        {
            files: [
                '**/components/**/*.{js,ts,vue}',
                '**/composables/**/*.{js,ts,vue}',
                '**/layouts/**/*.{js,ts,vue}',
                '**/middleware/**/*.{js,ts,vue}',
                '**/pages/**/*.{js,ts,vue}',
                '**/utils/**/*.{js,ts,vue}',
                '**/app.{js,ts,vue}',
                '**/error.{js,ts,vue}',
                '**/types.{js,ts,vue}',
            ],
            rules: {
                'vue/multi-word-component-names': 'off',
                'vue/no-multiple-template-root': 'off',
            },
            parser: 'vue-eslint-parser',
        },
    ],
}
