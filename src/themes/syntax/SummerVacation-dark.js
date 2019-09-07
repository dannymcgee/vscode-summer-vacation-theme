const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
	string: colors.green,
	numeric: colors.teal,
	units: grays.gray200,
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
	function: colors.blueLight,
	comment: colors.blueDark,
	tag: colors.orange,
	attribute: colors.pinkDark,
	component: colors.yellow,
}

module.exports = tokens
