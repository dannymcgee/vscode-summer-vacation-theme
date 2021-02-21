const neutrals = require('../../colors/dark-neutrals')
const colors = require('../../colors/dark-palette')
const { lighten } = require('../../colors/utils')

module.exports = {
	error: colors.red,
	background: neutrals.gray700,
	foreground: neutrals.gray100,
	punctuation: neutrals.gray200,
	string: colors.green,
	numeric: colors.teal,
	units: neutrals.gray200,
	null: colors.teal,
	boolean: colors.teal,
	constant: colors.teal,
	variable: colors.pinkLight,
	property: colors.pinkDark,
	keyword: colors.purple,
	control: colors.purple,
	this: colors.keyword,
	class: colors.yellow,
	type: colors.orange,
	function: colors.blueLight,
	// comment: desaturate(darken(colors.blueDark, 10), 20),
	comment: lighten(neutrals.gray400, 10),
	docComment: colors.blueDark,
	tag: colors.orange,
	attribute: colors.pinkDark,
	component: colors.yellow,
}
