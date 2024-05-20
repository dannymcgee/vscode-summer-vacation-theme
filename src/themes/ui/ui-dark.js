const neutrals = require('../../colors/dark-neutrals')
const colors = require('../../colors/dark-palette')
const tokens = require('../syntax/SummerVacation-dark')
const { fade, lighten, darken } = require('../../colors/utils')

const transparent = fade('#000', 0)

const uiColors = {

	// Base colors
	focusBorder: colors.blueDark,
	foreground: neutrals.gray100,
	'widget.shadow': neutrals.gray800,
	'selection.background': fade(colors.blueDark, 0.75),
	descriptionForeground: colors.gray100,
	errorForeground: colors.red,

	// Text colors
	'textBlockQuote.background': neutrals.gray800,
	'textBlockQuote.border': transparent,
	'textCodeBlock.background': neutrals.gray800,
	'textLink.foreground': colors.blueLight,
	'textLink.activeForeground': '#FFF',
	'textSeparator.foreground': neutrals.gray500,

	// Button control
	'button.background': darken(colors.blueDark, 15),
	'button.foreground': '#FFF',
	'button.hoverBackground': darken(colors.blueDark, 25),

	// Dropdown control
	'dropdown.background': neutrals.gray800,
	'dropdown.foreground': neutrals.gray100,
	'dropdown.border': transparent,
	'dropdown.listBackground': neutrals.gray600,

	// Input control
	// 'input.background': fade('#000', 0.125),
	'input.background': neutrals.gray800,
	'input.foreground': neutrals.gray100,
	'input.placeholderForeground': neutrals.gray300,
	'inputValidation.errorBackground': darken(colors.red, 20),
	'inputValidation.errorBorder': colors.red,
	'inputValidation.infoBackground': darken(colors.blueDark, 20),
	'inputValidation.infoBorder': colors.blueDark,
	'inputValidation.warningBackground': darken(colors.orange, 20),
	'inputValidation.warningBorder': colors.yellow,

	// Scrollbar control
	'scrollbarSlider.background': fade(neutrals.gray400, 0.4),
	'scrollbarSlider.hoverBackground': fade(neutrals.gray400, 0.6),
	'scrollbarSlider.activeBackground': neutrals.gray400,

	// Badge
	'badge.background': darken(colors.blueDark, 15),
	'badge.foreground': '#FFF',

	// Lists and trees
	'list.activeSelectionBackground': fade(colors.blueDark, 0.5),
	'list.activeSelectionForeground': '#FFF',
	'list.inactiveSelectionBackground': neutrals.gray500,
	'list.inactiveSelectionForeground': neutrals.gray100,
	'list.focusBackground': fade(neutrals.gray800, 0.5),
	'list.focusForeground': '#FFF',
	'list.hoverBackground': fade(neutrals.gray500, 0.5),
	'list.hoverForeground': neutrals.gray100,
	'list.dropBackground': fade(colors.blueDark, 0.333),
	'list.highlightForeground': colors.blueLight,
	'list.invalidItemForeground': lighten(colors.red, 5),
	'list.errorForeground': lighten(colors.red, 5),
	'list.warningForeground': colors.yellow,
	'tree.indentGuidesStroke': neutrals.gray400,

	// Activity Bar
	'activityBar.background': neutrals.gray500,
	'activityBar.activeBackground': neutrals.gray600,
	'activityBar.foreground': '#FFF',
	'activityBar.inactiveForeground': neutrals.gray200,
	'activityBar.border': transparent,
	'activityBar.activeBorder': colors.blueDark,
	'activityBarBadge.background': darken(colors.blueDark, 15),
	'activityBarBadge.foreground': '#FFF',

	// Side Bar
	'sideBar.background': neutrals.gray600,
	'sideBar.foreground': neutrals.gray100,
	'sideBar.border': transparent,
	'sideBar.dropBackground': fade(colors.blueDark, 0.333),
	'sideBarTitle.foreground': neutrals.gray100,
	'sideBarSectionHeader.background': neutrals.gray500,
	'sideBarSectionHeader.foreground': neutrals.gray100,
	'sideBarSectionHeader.border': transparent,

	// Editor Groups & Tabs
	'editorGroup.border': neutrals.gray400,
	'editorGroup.dropBackground': fade(colors.blueDark, 0.5),
	'editorGroupHeader.noTabsBackground': neutrals.gray700,
	'editorGroupHeader.tabsBackground': neutrals.gray600,
	'editorGroupHeader.tabsBorder': transparent,
	'editorGroup.emptyBackground': neutrals.gray700,
	'editorGroup.focusedEmptyBorder': transparent,
	'tab.border': neutrals.gray600,
	// -- Active
	'tab.activeBackground': neutrals.gray700,
	'tab.unfocusedActiveBackground': neutrals.gray700,
	'tab.activeForeground': '#FFF',
	'tab.unfocusedActiveForeground': neutrals.gray100,
	'tab.activeBorder': transparent,
	'tab.unfocusedActiveBorder': transparent,
	'tab.activeBorderTop': colors.blueDark,
	'tab.unfocusedActiveBorderTop': fade(colors.blueDark, 0.5),
	// -- Inactive
	'tab.inactiveBackground': neutrals.gray500,
	'tab.inactiveForeground': neutrals.gray200,
	'tab.unfocusedInactiveForeground': neutrals.gray200,
	// -- Modified
	'tab.activeModifiedBorder': colors.green,
	'tab.inactiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedActiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedInactiveModifiedBorder': fade(colors.green, 0.25),

	// Editor colors
	'editor.background': neutrals.gray700,
	'editor.foreground': neutrals.gray100,
	'editorLineNumber.foreground': neutrals.gray300,
	'editorLineNumber.activeForeground': neutrals.gray100,
	'editorCursor.background': neutrals.gray800,
	'editorCursor.foreground': neutrals.gray200,
	'editor.selectionBackground': neutrals.gray500,
	'editor.selectionHighlightBackground': fade(neutrals.gray500, 0.4),
	'editor.wordHighlightBackground': fade(colors.blueDark, 0.1),
	'editor.wordHighlightStrongBackground': fade(colors.blueDark, 0.2),
	'editor.findMatchBackground': fade(colors.green, 0.2),
	'editor.findMatchHighlightBackground': fade(colors.green, 0.1),
	'editor.hoverHighlightBackground': neutrals.gray800,
	'editor.lineHighlightBackground': fade(neutrals.gray800, 0.75),
	'editor.rangeHighlightBackground': fade('#FFFFFF', 0.05),
	'editorLink.activeForeground': colors.blueDark,
	'editorWhitespace.foreground': lighten(neutrals.gray700, 6.667),
	'editorIndentGuide.background': neutrals.gray500,
	'editorIndentGuide.activeBackground': lighten(neutrals.gray500, 5),
	'editorRuler.foreground': neutrals.gray600,
	'editorCodeLens.foreground': neutrals.gray300,
	'rust_analyzer.inlayHint': neutrals.gray400,
	'dart.closingLabels': neutrals.gray300,
	'editorBracketMatch.background': neutrals.gray500,
	'editorBracketMatch.border': fade(neutrals.gray500, 0.3),
	// -- Overvuew ruler
	'editorOverviewRuler.border': transparent,
	'editorOverviewRuler.findMatchForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.rangeHighlightForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.selectionHighlightForeground': fade(neutrals.gray400, 0.25),
	'editorOverviewRuler.wordHighlightForeground': fade(neutrals.gray500, 0.25),
	'editorOverviewRuler.wordHighlightStrongForeground': fade(neutrals.gray500, 0.25),
	'editorOverviewRuler.modifiedForeground': colors.green,
	'editorOverviewRuler.addedForeground': colors.teal,
	'editorOverviewRuler.deletedForeground': colors.red,
	'editorOverviewRuler.errorForeground': colors.red,
	'editorOverviewRuler.warningForeground': colors.yellow,
	'editorOverviewRuler.infoForeground': colors.blueDark,
	'editorOverviewRuler.bracketMatchForeground': fade(neutrals.gray500, 0.333),
	// -- Errors and warnings
	'editorError.foreground': fade(colors.red, 0.5),
	'editorWarning.foreground': fade(colors.yellow, 0.5),
	'editorInfo.foreground': fade(colors.blueDark, 0.5),
	'editorHint.foreground': fade(colors.green, 0.5),
	// -- Unused source code
	'editorUnnecessaryCode.opacity': fade('#000000', 0.6),
	// -- Gutter
	'editorGutter.background': transparent,
	'editorGutter.modifiedBackground': colors.green,
	'editorGutter.addedBackground': colors.teal,
	'editorGutter.deletedBackground': colors.red,

	// Diff editor colors
	'diffEditor.insertedTextBackground': fade(colors.teal, 0.1),
	// 'diffEditor.insertedTextBorder': colors.teal,
	'diffEditor.insertedLineBackground': fade(colors.teal, 0.05),
	'diffEditor.removedTextBackground': fade(colors.red, 0.1),
	// 'diffEditor.removedTextBorder': colors.red,
	'diffEditor.removedLineBackground': fade(colors.red, 0.05),

	// Editor widget colors
	'editorWidget.background': neutrals.gray600,
	'editorWidget.border': transparent,
	'editorWidget.resizeBorder': transparent,
	'editorSuggestWidget.background': neutrals.gray600,
	'editorSuggestWidget.border': transparent,
	'editorSuggestWidget.foreground': neutrals.gray100,
	// 'editorSuggestWidget.highlightForeground': colors.blueLight,
	'editorSuggestWidget.highlightForeground': '#FFF',
	'editorSuggestWidget.selectedBackground': neutrals.gray800,
	'editorHoverWidget.background': lighten(neutrals.gray800, 2.5),
	'editorHoverWidget.border': neutrals.gray400,
	'debugExceptionWidget.background': fade(colors.red, 0.25),
	'debugExceptionWidget.border': colors.red,
	'editorMarkerNavigation.background': neutrals.gray600,

	// Peek view colors
	'peekView.border': colors.blueDark,
	'peekViewEditor.background': neutrals.gray700,
	'peekViewResult.background': neutrals.gray600,
	'peekViewTitle.background': neutrals.gray800,
	'peekViewTitleLabel.foreground': '#FFF',
	'peekViewTitleDescription.foreground': neutrals.gray200,
	'peekViewResult.lineForeground': '#FFF',
	'peekViewResult.fileForeground': neutrals.gray200,
	'peekViewEditor.matchHighlightBackground': lighten(neutrals.gray500, 5),
	'peekViewResult.matchHighlightBackground': neutrals.gray800,

	// Merge conflicts
	'merge.border': transparent,
	'merge.currentHeaderBackground': fade(colors.green, 0.5),
	'merge.currentContentBackground': fade(colors.green, 0.25),
	'editorOverviewRuler.currentContentForeground': colors.green,
	'merge.incomingHeaderBackground': fade(colors.blueDark, 0.5),
	'merge.incomingContentBackground': fade(colors.blueDark, 0.25),
	'editorOverviewRuler.incomingContentForeground': colors.blueDark,
	'merge.commonHeaderBackground': transparent,
	'merge.commonContentBackground': transparent,
	'editorOverviewRuler.commonContentForeground': transparent,

	// Panel colors
	'panel.background': neutrals.gray600,
	'panel.border': transparent,
	'panelTitle.activeBorder': colors.blueDark,
	'panelTitle.activeForeground': neutrals.gray100,
	'panelTitle.inactiveForeground': neutrals.gray200,

	// Status Bar colors
	'statusBar.background': neutrals.gray700,
	'statusBar.foreground': neutrals.gray100,
	'statusBar.border': transparent,
	'statusBar.debuggingBackground': neutrals.gray700,
	'statusBar.debuggingForeground': neutrals.gray100,
	'statusBar.debuggingBorder': colors.yellow,
	'statusBar.noFolderBackground': neutrals.gray700,
	'statusBar.noFolderForeground': neutrals.gray100,
	'statusBar.noFolderBorder': transparent,
	'statusBarItem.activeBackground': fade(colors.blueDark, 0.5),
	'statusBarItem.hoverBackground': neutrals.gray500,
	'statusBarItem.prominentBackground': transparent,
	'statusBarItem.prominentForeground': '#FFF',
	'statusBarItem.prominentHoverBackground': neutrals.gray500,

	// Title Bar colors
	'titleBar.activeBackground': neutrals.gray800,
	'titleBar.activeForeground': neutrals.gray200,
	'titleBar.inactiveBackground': neutrals.gray800,
	'titleBar.inactiveForeground': neutrals.gray300,
	'titleBar.border': transparent,

	// Menu Bar colors
	'menubar.selectionForeground': '#FFF',
	'menubar.selectionBackground': neutrals.gray600,
	'menubar.selectionBorder': transparent,
	'menu.foreground': neutrals.gray100,
	'menu.background': neutrals.gray600,
	'menu.selectionForeground': '#FFF',
	'menu.selectionBackground': fade(neutrals.gray800, 0.5),
	'menu.selectionBorder': transparent,
	'menu.separatorBackground': neutrals.gray400,

	// Notification colors
	'notificationCenter.border': transparent,
	'notificationCenterHeader.background': neutrals.gray600,
	'notificationCenterHeader.foreground': neutrals.gray100,
	'notificationToast.border': transparent,
	'notifications.background': neutrals.gray700,
	'notifications.foreground': neutrals.gray100,
	'notifications.border': transparent,
	'notificationLink.foreground': colors.blueLight,

	// Extensions
	'extensionButton.prominentForeground': '#FFF',
	'extensionButton.prominentBackground': darken(colors.green, 10),
	'extensionButton.prominentHoverBackground': darken(colors.green, 20),

	// Integrated Terminal colors
	'terminal.background':          neutrals.gray800,
	'terminal.border':              neutrals.gray600,
	'terminal.foreground':          neutrals.gray100,
	'terminal.ansiBlack':           neutrals.gray800,     // PowerShell: ConsoleColor.Black
	'terminal.ansiBrightBlack':     neutrals.gray300,     // PowerShell: ConsoleColor.DarkGray
	'terminal.ansiRed':             colors.red,           // PowerShell: ConsoleColor.DarkRed
	'terminal.ansiBrightRed':       colors.pinkDark,      // PowerShell: ConsoleColor.Red
	'terminal.ansiGreen':           colors.green,         // PowerShell: ConsoleColor.DarkGreen
	'terminal.ansiBrightGreen':     colors.green,         // PowerShell: ConsoleColor.Green
	'terminal.ansiYellow':          colors.orange,        // PowerShell: ConsoleColor.DarkYellow
	'terminal.ansiBrightYellow':    colors.yellow,        // PowerShell: ConsoleColor.Yellow
	'terminal.ansiBlue':            colors.blueDark,      // PowerShell: ConsoleColor.DarkBlue
	'terminal.ansiBrightBlue':      colors.blueLight,     // PowerShell: ConsoleColor.Blue
	'terminal.ansiMagenta':         colors.purple,        // PowerShell: ConsoleColor.DarkMagenta
	'terminal.ansiBrightMagenta':   colors.pinkLight,     // PowerShell: ConsoleColor.Magenta
	'terminal.ansiCyan':            colors.teal,          // PowerShell: ConsoleColor.DarkCyan
	'terminal.ansiBrightCyan':      colors.teal,          // PowerShell: ConsoleColor.Cyan
	'terminal.ansiWhite':           neutrals.gray200,     // PowerShell: ConsoleColor.Gray
	'terminal.ansiBrightWhite':     neutrals.gray100,     // PowerShell: ConsoleColor.White
	'terminal.selectionBackground': fade(neutrals.gray400, 0.5),
	'terminalCursor.background':    neutrals.gray700,
	'terminalCursor.foreground':    neutrals.gray200,

	// Debug
	'debugToolBar.background': neutrals.gray600,
	'debugToolBar.border': transparent,
	'editor.stackFrameHighlightBackground': fade(neutrals.gray800, 0.5),
	'editor.focusedStackFrameHighlightBackground': fade(neutrals.gray800, 0.65),
	"debugConsole.infoForeground": neutrals.gray100,
	"debugConsole.warningForeground": colors.yellow,
	"debugConsole.errorForeground": colors.red,
	"debugConsole.sourceForeground": neutrals.gray300,

	// Welcome page
	'welcomePage.background': neutrals.gray700,
	'welcomePage.buttonBackground': colors.blueDark,
	'welcomePage.buttonHoverBackground': darken(colors.blueDark, 10),
	'walkThrough.embeddedEditorBackground': neutrals.gray700,

	// Git colors
	'gitDecoration.addedResourceForeground': colors.teal,
	'gitDecoration.modifiedResourceForeground': colors.green,
	'gitDecoration.deletedResourceForeground': colors.red,
	'gitDecoration.untrackedResourceForeground': colors.yellow,
	'gitDecoration.ignoredResourceForeground': neutrals.gray300,
	'gitDecoration.conflictingResourceForeground': colors.orange,
	'gitDecoration.submoduleResourceForeground': colors.blueLight,

	// Settings Editor colors
	'settings.headerForeground': '#FFF',
	'settings.modifiedItemIndicator': colors.blueDark,
	'settings.dropdownBackground': neutrals.gray800,
	'settings.dropdownForeground': neutrals.gray100,
	'settings.dropdownBorder': transparent,
	'settings.dropdownListBorder': transparent,
	'settings.checkboxBackground': neutrals.gray800,
	'settings.checkboxForeground': colors.blueLight,
	'settings.checkboxBorder': transparent,
	'settings.textInputBackground': neutrals.gray800,
	'settings.textInputForeground': neutrals.gray100,
	'settings.textInputBorder': transparent,
	'settings.numberInputBackground': neutrals.gray800,
	'settings.numberInputForeground': neutrals.gray100,
	'settings.numberInputBorder': transparent,

	// Breadcrumbs
	'breadcrumb.foreground': neutrals.gray200,
	'breadcrumb.background': neutrals.gray700,
	'breadcrumb.focusForeground': neutrals.gray100,
	'breadcrumb.activeSelectionForeground': '#FFF',
	'breadcrumbPicker.background': neutrals.gray700,

	// Symbol icons
	'symbolIcon.arrayForeground': tokens.class,
	'symbolIcon.booleanForeground': tokens.constant,
	'symbolIcon.classForeground': tokens.class,
	'symbolIcon.colorForeground': tokens.variable,
	'symbolIcon.constructorForeground': tokens.keyword,
	'symbolIcon.constantForeground': tokens.constant,
	'symbolIcon.enumeratorForeground': tokens.class,
	'symbolIcon.enumeratorMemberForeground': tokens.property,
	'symbolIcon.eventForeground': tokens.variable,
	'symbolIcon.fieldForeground': tokens.property,
	'symbolIcon.fileForeground': tokens.foreground,
	'symbolIcon.folderForeground': tokens.foreground,
	'symbolIcon.functionForeground': tokens.function,
	'symbolIcon.interfaceForeground': tokens.type,
	'symbolIcon.keyForeground': tokens.property,
	'symbolIcon.keywordForeground': tokens.keyword,
	'symbolIcon.methodForeground': tokens.function,
	'symbolIcon.moduleForeground': tokens.keyword,
	'symbolIcon.namespaceForeground': tokens.class,
	'symbolIcon.nullForeground': tokens.constant,
	'symbolIcon.numberForeground': tokens.constant,
	'symbolIcon.objectForeground': tokens.class,
	'symbolIcon.operatorForeground': tokens.punctuation,
	'symbolIcon.packageForeground': tokens.keyword,
	'symbolIcon.propertyForeground': tokens.property,
	'symbolIcon.referenceForeground': tokens.foreground,
	'symbolIcon.snippetForeground': tokens.foreground,
	'symbolIcon.stringForeground': tokens.string,
	'symbolIcon.structForeground': tokens.class,
	'symbolIcon.textForeground': tokens.foreground,
	'symbolIcon.typeParameterForeground': tokens.type,
	'symbolIcon.unitForeground': tokens.constant,
	'symbolIcon.variableForeground': tokens.variable,

	// Inlay hints
	'editorInlayHint.background': neutrals.gray600,
	'editorInlayHint.foreground': neutrals.gray300,

	// Third-party
	'errorLens.errorBackground': fade(tokens.error, 0.1),
	'errorLens.errorForeground': fade(tokens.error, 0.6),
	'errorLens.warningBackground': fade(colors.yellow, 0.05),
	'errorLens.warningForeground': fade(colors.yellow, 0.6),
	'errorLens.hintBackground': '#0000',
}

module.exports = uiColors
