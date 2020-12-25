const neutrals = require('../../colors/light-neutrals')
const colors = require('../../colors/light-palette')

tokens = {
	error: colors.red,
	background: neutrals.gray700,
	foreground: neutrals.gray100,
	punctuation: neutrals.gray300,
	string: colors.green,
	numeric: colors.teal,
	units: neutrals.gray300,
	null: colors.teal,
	boolean: colors.teal,
	constant: colors.teal,
	variable: colors.pinkLight,
	property: colors.pinkDark,
	keyword: colors.purple,
	control: colors.purple,
	this: colors.orange,
	class: colors.yellow,
	type: colors.orange,
	function: colors.blueDark,
	comment: colors.blueLight,
	tag: colors.orange,
	attribute: colors.pinkDark,
	component: colors.yellow,
}

module.exports = tokens
