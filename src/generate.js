const fs = require('fs')

const uiDark = require('./themes/ui/ui-dark')
const uiLight = require('./themes/ui/ui-light')
const SyntaxFactory = require('./themes/syntax/syntax-factory')

const themes = [{
	name: 'Dark',
	id: 'SummerVacation-dark',
	type: 'dark',
}, {
	name: 'Dark (VS Code)',
	id: 'SummerVacation-vscdark',
	type: 'dark',
}, {
	name: 'Dark (One Dark)',
	id: 'SummerVacation-onedark',
	type: 'dark',
}, {
	name: 'Light',
	id: 'SummerVacation-light',
	type: 'light',
}]

for (let { name, id, type } of themes) {
	generateTheme(name, id, type)
}

function generateTheme(name, id, type) {
	let tokens = require(`./themes/syntax/${id}`)
	let theme = {
		$schema: 'vscode://schemas/color-theme',
		name,
		type,
		...SyntaxFactory(tokens),
		colors: { ...(type === 'dark' ? uiDark : uiLight) },
		semanticHighlighting: true,
	}
	let themeContent = JSON.stringify(theme, null, '\t')

	fs.writeFile(`./themes/${id}.json`, themeContent, error => {
		if (error) throw error
		console.log(`'${name}' theme file written to './themes/${id}.json'`)
	})
}
