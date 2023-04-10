module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue-scoped-css/vue3-recommended'
	],
	'overrides': [
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'parser': '@typescript-eslint/parser',
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
	}
};
