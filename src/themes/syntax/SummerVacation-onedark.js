const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')

tokens = {
	background: grays.gray700,
	foreground: grays.gray100,
	punctuation: grays.gray200,
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
	comment: grays.gray300,
	tag: colors.pinkDark,
	attribute: colors.orange,
	component: colors.pinkLight,
}

module.exports = tokens
