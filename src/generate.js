const fs = require('fs')

const uiColors = require('./themes/ui/ui-dark')
const SyntaxFactory = require('./themes/syntax/syntax-factory')

const themes = [
	{
		name: 'Dark',
		id: 'SummerVacation-dark'
	},
	{
		name: 'Dark (VS Code)',
		id: 'SummerVacation-vscdark'
	},
	{
		name: 'Dark (One Dark)',
		id: 'SummerVacation-onedark'
	}
]

for (const { name, id } of themes) {
	const tokens = require(`./themes/syntax/${id}`)
	const tokenColors = SyntaxFactory(tokens)
	const theme = {
		$schema: 'vscode://schemas/color-theme',
		name,
		type: 'dark',
		tokenColors,
		colors: { ...uiColors }
	}
	const themeContent = JSON.stringify(theme, null, '\t')

	fs.writeFile(`./themes/${id}.json`, themeContent, error => {
		if (error)
			throw error
		console.log(`'${name}' theme file written to './themes/${id}.json'`)
	})
}
