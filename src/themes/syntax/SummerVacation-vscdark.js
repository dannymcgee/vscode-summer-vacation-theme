const neutrals = require('../../colors/dark-neutrals')
const colors = require('../../colors/dark-palette')
const { darken, desaturate, lighten, saturate } = require('../../colors/utils')

module.exports = {
	error: colors.red,
	background: neutrals.gray700,
	foreground: neutrals.gray100,
	punctuation: neutrals.gray200,
	string: colors.orange,
	numeric: colors.green,
	units: colors.purple,
	null: colors.orange,
	boolean: colors.orange,
	constant: saturate(darken(colors.blueLight, 2), 10),
	variable: lighten(colors.blueLight, 7.5),
	property: saturate(darken(colors.blueLight, 2), 10),
	keyword: colors.blueDark,
	control: colors.purple,
	this: colors.blueDark,
	class: colors.teal,
	type: colors.teal,
	// function: desaturate(lighten(colors.yellow, 5), 10),
	function: colors.yellow,
	comment: desaturate(darken(colors.green, 12.5), 25),
	docComment: desaturate(darken(colors.green, 5), 10),
	tag: colors.blueDark,
	attribute: colors.blueLight,
	component: colors.teal,
	whitespace: neutrals.gray400,
}
