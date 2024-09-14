module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:@stylistic/recommended-extends',
    'plugin:tailwindcss/recommended',
  ],
  plugins: [
    // https://eslint.style/packages/default
    '@stylistic/eslint-plugin',
  ],
  settings: {
    tailwindcss: {
      whitelist: [
        'content-(grid|full-width|narrow)'
      ]
    }
  },
  rules: {
    // js
    'no-console': 'warn',
    'no-debugger': 'warn',
    '@stylistic/comma-dangle': ['error', 'only-multiline'],
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/space-before-function-paren': ['error', 'never'],
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
    }],

    // vue
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'never',
    }],
    indent: ['error', 2],
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    //    'vue/component-name-in-template-casing': [
    //      'error',
    //      'PascalCase',
    //      {
    //        'registeredComponentsOnly': false,
    //        'ignores': [
    //          '/^component/',
    //          '/^i18n-t/',
    //          '/^swiper-/',
    //          '/^transition/'
    //        ]
    //      }
    //    ],
    // typescript
    '@typescript-eslint/consistent-type-imports': 'error',

    // ignore dayjs imports
    'import/no-named-as-default-member': 'off',
  },
}
