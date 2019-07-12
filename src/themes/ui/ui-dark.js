const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')
const fade = require('../../colors/utils')

const uiColors = {
	// General
	'editor.background': colors.background,
	'editor.foreground': colors.foreground,
	foreground: colors.foreground,
	// Dropdown
	'dropdown.background': colors.background,
	'dropdown.listBackground': colors.background,
	'dropdown.border': fade('#000', 0),
	// Input
	'input.background': fade('#000', 0.125),
	'input.foreground': colors.foreground,
	'input.placeholderForeground': grays.gray300,
	'inputOption.activeBorder': colors.blueDark,
	// List
	'list.activeSelectionBackground': fade(colors.blueDark, 0.5),
	'list.dropBackground': colors.blueDark,
	'list.focusBackground': fade(grays.gray800, 0.5),
	'list.focusForeground': '#FFF',
	'list.highlightForeground': colors.blueLight,
	'list.activeSelectionBackground': fade(colors.blueDark, 0.5),
}

console.log('hello world!');
