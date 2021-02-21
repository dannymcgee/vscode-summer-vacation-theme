const neutrals = require('../../colors/dark-neutrals')
const colors = require('../../colors/dark-palette')

module.exports = {
	error: colors.red,
	background: neutrals.gray700,
	foreground: neutrals.gray100,
	punctuation: neutrals.gray200,
	string: colors.green,
	numeric: colors.orange,
	units: colors.purple,
	null: colors.orange,
	boolean: colors.orange,
	constant: colors.orange,
	variable: colors.pinkDark,
	property: colors.pinkDark,
	keyword: colors.purple,
	control: colors.purple,
	this: colors.yellow,
	class: colors.yellow,
	type: colors.orange,
	function: colors.blueLight,
	comment: neutrals.gray300,
	docComment: neutrals.gray300,
	tag: colors.pinkDark,
	attribute: colors.orange,
	component: colors.pinkLight,
}
