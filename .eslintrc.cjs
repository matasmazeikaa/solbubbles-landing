const objectCurlySpacingRule = [
	'error',
	'always',
];

const objectPropertyNewlineRule = [
	'error',
	{
		allowMultiplePropertiesPerLine: false,
	},
];

const arrayBracketNewlineRule = [
	'error',
	{
		multiline: true,
		minItems: 3,
	},
];

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	ignorePatterns: [
		'.nuxt',
		'.output',
		'dist',
		'node_modules',
		'components.d.ts',
		'nuxt.d.ts',
	],
	extends: [
		'eslint:recommended',
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'plugin:vue/vue3-recommended',
		'prettier',
		'airbnb-base',
	],
	plugins: [
		'import',
		'modules-newline',
		'destructuring-newline',
		'destructure-depth',
		'unicorn',
	],
	rules: {
		// Import rules
		'import/newline-after-import': ['error'],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'builtin',
					'external',
					'internal',
					'sibling',
					'parent',
				],
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'import/prefer-default-export': 'off',
		// 'modules-newline/import-declaration-newline': 'error',
		'modules-newline/export-declaration-newline': 'error',
		'no-restricted-imports': [
			'error',
			{
				patterns: ['..*'],
			},
		],

		// Unicorn rules
		'unicorn/empty-brace-spaces': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-useless-undefined': 'error',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-flat-map': 'error',
		'unicorn/prefer-array-some': 'error',
		'unicorn/prefer-date-now': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-keyboard-event-key': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-push-push': 'error',
		'unicorn/no-nested-ternary': 'error',
		'unicorn/better-regex': 'error',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				extendDefaultReplacements: false,
				replacements: {
					args: false,
					props: false,
					prop: false,
					refs: false,
					ref: false,
					env: false,
				},
			},
		],
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
				ignore: ['.*.spec.js'],
			},
		],

		// Spacing rules
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: [
					'const',
					'let',
					'var',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var',
				],
				next: [
					'const',
					'let',
					'var',
				],
			},
			{
				blankLine: 'always',
				prev: ['block-like'],
				next: ['*'],
			},
		],
		'newline-before-return': ['error'],
		indent: [
			'error',
			'tab',
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		curly: 'error',

		// Object spacing
		'destructuring-newline/object-property-newline': 2,
		'object-curly-spacing': objectCurlySpacingRule,
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					multiline: true,
					minProperties: 1,
				},
				ObjectPattern: {
					multiline: true,
					minProperties: 2,
				},
				ImportDeclaration: {
					multiline: true,
					minProperties: 2,
				},
			},
		],
		'object-property-newline': objectPropertyNewlineRule,
		'array-bracket-newline': arrayBracketNewlineRule,
		'array-element-newline': [
			'error',
			{
				ArrayExpression: {
					multiline: true,
					minItems: 2,
				},
				ArrayPattern: {
					multiline: true,
					minItems: 3,
				},
			},
		],

		// Miscellaneous
		'multiline-comment-style': [
			'error',
			'separate-lines',
		],
		'no-console': [
			'error',
			{
				allow: ['error'],
			},
		],
		'destructure-depth/max-depth': ['error'],
		'class-methods-use-this': 'off',
		'no-underscore-dangle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'vue/max-len': [
			'error',
			{
				code: 140,
				template: 99999,
				tabWidth: 2,
				comments: 99999,
				ignorePattern: '',
				ignoreComments: false,
				ignoreTrailingComments: false,
				ignoreUrls: false,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: false,
				ignoreHTMLAttributeValues: false,
				ignoreHTMLTextContents: false,
			},
		],
		'vue/html-closing-bracket-newline': [
			'error',
			{
				singleline: 'never',
				multiline: 'always',
			},
		],

		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],

		'no-undef': 'off',

		// Vue
		// Spacing rules
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				ignores: [],
			},
		],
		'vue/multi-word-component-names': 'off',
		'vue/html-indent': [
			'error',
			'tab',
		],
		// Object spacing
		'vue/object-curly-spacing': objectCurlySpacingRule,
		'vue/object-curly-newline': [
			'error',
			{
				multiline: true,
				minProperties: 4,
			},
		],
		'vue/object-property-newline': objectPropertyNewlineRule,

		// Array spacing
		'vue/array-bracket-newline': arrayBracketNewlineRule,

		// Casing
		'vue/custom-event-name-casing': [
			'error',
			'kebab-case',
			{
				ignores: ['/^.*:click$/'],
			},
		],
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: false,
				ignores: [
					'i18n',
					'masonry',
				],
			},
		],

		'import/extensions': 'off',

		'vue/no-multiple-template-root': 'off',

		// Miscellaneous
		'vue/no-v-html': 'off',
		'vue/attributes-order': ['error'],
		'max-len': 'off',

		// @vue/airbnb config just extends airbnb-base config and overrides 'no-param-reassign' rule. Since this config extends airbnb-base
		// by default already, there is no point in extending the whole @vue/airbnb config.
		// Copying this override rule is sufficient enough.
		// (https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js)
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'state', // for vuex state
					'acc', // for reduce accumulators
					'e', // for e.returnvalue
				],
			},
		],
	},
};
