const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
	string: colors.orange,
	numeric: colors.orange,
	units: colors.purple,
	null: colors.orange,
	boolean: colors.orange,
	constant: colors.orange,
	variable: colors.blueLight,
	property: colors.blueLight,
	keyword: colors.blueDark,
	control: colors.purple,
	this: colors.blueDark,
	class: colors.teal,
	type: colors.green,
	function: colors.yellow,
	comment: colors.green,
	tag: colors.blueDark,
	attribute: colors.blueLight,
	component: colors.teal,
}

module.exports = tokens
