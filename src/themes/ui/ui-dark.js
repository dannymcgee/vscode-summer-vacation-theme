const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')
const tokens = require('../syntax/SummerVacation-dark');
const { fade, lighten, darken } = require('../../colors/utils')

const transparent = fade('#000', 0)

const uiColors = {

	// Base colors
	focusBorder: colors.blueDark,
	foreground: grays.gray100,
	'widget.shadow': grays.gray800,
	'selection.background': fade(colors.blueDark, 0.75),
	descriptionForeground: colors.gray100,
	errorForeground: colors.red,

	// Text colors
	'textBlockQuote.background': grays.gray800,
	'textBlockQuote.border': transparent,
	'textCodeBlock.background': grays.gray800,
	'textLink.foreground': colors.blueLight,
	'textLink.activeForeground': '#FFF',
	'textSeparator.foreground': grays.gray500,

	// Button control
	'button.background': darken(colors.blueDark, 15),
	'button.foreground': '#FFF',
	'button.hoverBackground': darken(colors.blueDark, 25),

	// Dropdown control
	'dropdown.background': grays.gray800,
	'dropdown.foreground': grays.gray100,
	'dropdown.border': transparent,
	'dropdown.listBackground': grays.gray600,

	// Input control
	// 'input.background': fade('#000', 0.125),
	'input.background': grays.gray800,
	'input.foreground': grays.gray100,
	'input.placeholderForeground': grays.gray300,
	'inputValidation.errorBackground': darken(colors.red, 20),
	'inputValidation.errorBorder': colors.red,
	'inputValidation.infoBackground': darken(colors.blueDark, 20),
	'inputValidation.infoBorder': colors.blueDark,
	'inputValidation.warningBackground': darken(colors.orange, 20),
	'inputValidation.warningBorder': colors.yellow,

	// Scrollbar control
	'scrollbarSlider.background': fade(grays.gray400, 0.4),
	'scrollbarSlider.hoverBackground': fade(grays.gray400, 0.6),
	'scrollbarSlider.activeBackground': grays.gray400,

	// Badge
	'badge.background': darken(colors.blueDark, 15),
	'badge.foreground': '#FFF',

	// Lists and trees
	'list.activeSelectionBackground': fade(colors.blueDark, 0.5),
	'list.activeSelectionForeground': '#FFF',
	'list.inactiveSelectionBackground': grays.gray500,
	'list.inactiveSelectionForeground': grays.gray100,
	'list.focusBackground': fade(grays.gray800, 0.5),
	'list.focusForeground': '#FFF',
	'list.hoverBackground': fade(grays.gray500, 0.5),
	'list.hoverForeground': grays.gray100,
	'list.dropBackground': fade(colors.blueDark, 0.333),
	'list.highlightForeground': colors.blueLight,
	'list.invalidItemForeground': lighten(colors.red, 5),
	'list.errorForeground': lighten(colors.red, 5),
	'list.warningForeground': colors.yellow,
	'tree.indentGuidesStroke': grays.gray400,

	// Activity Bar
	'activityBar.background': grays.gray500,
	'activityBar.dropBackground': fade(colors.blueDark, 0.333),
	'activityBar.foreground': '#FFF',
	'activityBar.inactiveForeground': grays.gray200,
	'activityBar.border': transparent,
	'activityBarBadge.background': darken(colors.blueDark, 15),
	'activityBarBadge.foreground': '#FFF',

	// Side Bar
	'sideBar.background': grays.gray600,
	'sideBar.foreground': grays.gray100,
	'sideBar.border': transparent,
	'sideBar.dropBackground': fade(colors.blueDark, 0.333),
	'sideBarTitle.foreground': grays.gray100,
	'sideBarSectionHeader.background': grays.gray500,
	'sideBarSectionHeader.foreground': grays.gray100,
	'sideBarSectionHeader.border': transparent,

	// Editor Groups & Tabs
	'editorGroup.border': grays.gray400,
	'editorGroup.dropBackground': fade(colors.blueDark, 0.5),
	'editorGroupHeader.noTabsBackground': grays.gray700,
	'editorGroupHeader.tabsBackground': grays.gray600,
	'editorGroupHeader.tabsBorder': transparent,
	'editorGroup.emptyBackground': grays.gray700,
	'editorGroup.focusedEmptyBorder': transparent,
	'tab.border': grays.gray600,
	// -- Active
	'tab.activeBackground': grays.gray700,
	'tab.unfocusedActiveBackground': grays.gray700,
	'tab.activeForeground': '#FFF',
	'tab.unfocusedActiveForeground': grays.gray100,
	'tab.activeBorder': transparent,
	'tab.unfocusedActiveBorder': transparent,
	'tab.activeBorderTop': colors.blueDark,
	'tab.unfocusedActiveBorderTop': fade(colors.blueDark, 0.5),
	// -- Inactive
	'tab.inactiveBackground': grays.gray500,
	'tab.inactiveForeground': grays.gray200,
	'tab.unfocusedInactiveForeground': grays.gray200,
	// -- Modified
	'tab.activeModifiedBorder': colors.green,
	'tab.inactiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedActiveModifiedBorder': fade(colors.green, 0.5),
	'tab.unfocusedInactiveModifiedBorder': fade(colors.green, 0.25),

	// Editor colors
	'editor.background': grays.gray700,
	'editor.foreground': grays.gray100,
	'editorLineNumber.foreground': grays.gray300,
	'editorLineNumber.activeForeground': grays.gray100,
	'editorCursor.background': grays.gray800,
	'editorCursor.foreground': grays.gray200,
	'editor.selectionBackground': lighten(grays.gray500, 5),
	'editor.selectionHighlightBackground': fade(lighten(grays.gray500, 5), 0.4),
	'editor.wordHighlightBackground': fade('#FFF', 0.1),
	'editor.wordHighlightStrongBackground': fade('#FFF', 0.1),
	'editor.findMatchBackground': lighten(grays.gray500, 5),
	'editor.findMatchHighlightBackground': grays.gray500,
	'editor.lineHighlightBackground': fade(grays.gray800, 0.5),
	'editor.rangeHighlightBackground': fade('#FFFFFF', 0.05),
	'editorLink.activeForeground': colors.blueDark,
	'editorWhitespace.foreground': lighten(grays.gray700, 10),
	'editorIndentGuide.background': grays.gray500,
	'editorIndentGuide.activeBackground': lighten(grays.gray500, 5),
	'editorRuler.foreground': grays.gray600,
	'editorCodeLens.foreground': grays.gray300,
	'editorBracketMatch.background': grays.gray500,
	'editorBracketMatch.border': fade(grays.gray500, 0.3),
	// -- Overvuew ruler
	'editorOverviewRuler.border': transparent,
	'editorOverviewRuler.findMatchForeground': fade(grays.gray400, 0.25),
	'editorOverviewRuler.rangeHighlightForeground': fade(grays.gray400, 0.25),
	'editorOverviewRuler.selectionHighlightForeground': fade(grays.gray400, 0.25),
	'editorOverviewRuler.wordHighlightForeground': fade(grays.gray500, 0.25),
	'editorOverviewRuler.wordHighlightStrongForeground': fade(grays.gray500, 0.25),
	'editorOverviewRuler.modifiedForeground': colors.green,
	'editorOverviewRuler.addedForeground': colors.teal,
	'editorOverviewRuler.deletedForeground': colors.red,
	'editorOverviewRuler.errorForeground': colors.red,
	'editorOverviewRuler.warningForeground': colors.yellow,
	'editorOverviewRuler.infoForeground': colors.blueDark,
	'editorOverviewRuler.bracketMatchForeground': fade(grays.gray500, 0.333),
	// -- Errors and warnings
	'editorError.foreground': colors.red,
	'editorWarning.foreground': colors.yellow,
	'editorInfo.foreground': colors.blueDark,
	'editorHint.foreground': colors.green,
	// -- Unused source code
	'editorUnnecessaryCode.opacity': fade('#000000', 0.6),
	// -- Gutter
	'editorGutter.background': transparent,
	'editorGutter.modifiedBackground': colors.green,
	'editorGutter.addedBackground': colors.teal,
	'editorGutter.deletedBackground': colors.red,

	// Diff editor colors
	'diffEditor.insertedTextBackground': fade(colors.teal, 0.05),
	// 'diffEditor.insertedTextBorder': colors.teal,
	'diffEditor.removedTextBackground': fade(colors.red, 0.075),
	// 'diffEditor.removedTextBorder': colors.red,

	// Editor widget colors
	'editorWidget.background': grays.gray600,
	'editorWidget.border': transparent,
	'editorWidget.resizeBorder': transparent,
	'editorSuggestWidget.background': grays.gray600,
	'editorSuggestWidget.border': transparent,
	'editorSuggestWidget.foreground': grays.gray100,
	// 'editorSuggestWidget.highlightForeground': colors.blueLight,
	'editorSuggestWidget.highlightForeground': '#FFF',
	'editorSuggestWidget.selectedBackground': grays.gray800,
	'editorHoverWidget.background': grays.gray800,
	'editorHoverWidget.border': transparent,
	'debugExceptionWidget.background': fade(colors.red, 0.25),
	'debugExceptionWidget.border': colors.red,
	'editorMarkerNavigation.background': grays.gray600,

	// Peek view colors
	'peekView.border': colors.blueDark,
	'peekViewEditor.background': grays.gray700,
	'peekViewResult.background': grays.gray600,
	'peekViewTitle.background': grays.gray800,
	'peekViewTitleLabel.foreground': '#FFF',
	'peekViewTitleDescription.foreground': grays.gray200,
	'peekViewResult.lineForeground': '#FFF',
	'peekViewResult.fileForeground': grays.gray200,
	'peekViewEditor.matchHighlightBackground': lighten(grays.gray500, 5),
	'peekViewResult.matchHighlightBackground': grays.gray800,

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
	'panel.background': grays.gray600,
	'panel.border': transparent,
	'panel.dropBackground': fade(colors.blueDark, 0.4),
	'panelTitle.activeBorder': colors.blueDark,
	'panelTitle.activeForeground': grays.gray100,
	'panelTitle.inactiveForeground': grays.gray200,

	// Status Bar colors
	'statusBar.background': grays.gray700,
	'statusBar.foreground': grays.gray100,
	'statusBar.border': transparent,
	'statusBar.debuggingBackground': grays.gray700,
	'statusBar.debuggingForeground': grays.gray100,
	'statusBar.debuggingBorder': colors.yellow,
	'statusBar.noFolderBackground': grays.gray700,
	'statusBar.noFolderForeground': grays.gray100,
	'statusBar.noFolderBorder': transparent,
	'statusBarItem.activeBackground': fade(colors.blueDark, 0.5),
	'statusBarItem.hoverBackground': grays.gray500,
	'statusBarItem.prominentBackground': transparent,
	'statusBarItem.prominentForeground': '#FFF',
	'statusBarItem.prominentHoverBackground': grays.gray500,

	// Title Bar colors
	'titleBar.activeBackground': grays.gray800,
	'titleBar.activeForeground': grays.gray200,
	'titleBar.inactiveBackground': grays.gray800,
	'titleBar.inactiveForeground': grays.gray300,
	'titleBar.border': transparent,

	// Menu Bar colors
	'menubar.selectionForeground': '#FFF',
	'menubar.selectionBackground': grays.gray600,
	'menubar.selectionBorder': transparent,
	'menu.foreground': grays.gray100,
	'menu.background': grays.gray600,
	'menu.selectionForeground': '#FFF',
	'menu.selectionBackground': fade(grays.gray800, 0.5),
	'menu.selectionBorder': transparent,
	'menu.separatorBackground': grays.gray400,

	// Notification colors
	'notificationCenter.border': transparent,
	'notificationCenterHeader.background': grays.gray600,
	'notificationCenterHeader.foreground': grays.gray100,
	'notificationToast.border': transparent,
	'notifications.background': grays.gray700,
	'notifications.foreground': grays.gray100,
	'notifications.border': transparent,
	'notificationLink.foreground': colors.blueLight,

	// Extensions
	'extensionButton.prominentForeground': '#FFF',
	'extensionButton.prominentBackground': darken(colors.green, 10),
	'extensionButton.prominentHoverBackground': darken(colors.green, 20),

	// Integrated Terminal colors
	'terminal.background':         grays.gray800,
	'terminal.border':             grays.gray600,
	'terminal.foreground':         grays.gray100,
	'terminal.ansiBlack':          grays.gray800,     // PowerShell: ConsoleColor.Black
	'terminal.ansiBrightBlack':    grays.gray200,     // PowerShell: ConsoleColor.DarkGray
	'terminal.ansiRed':            colors.red,        // PowerShell: ConsoleColor.DarkRed
	'terminal.ansiBrightRed':      colors.pinkDark,   // PowerShell: ConsoleColor.Red
	'terminal.ansiGreen':          colors.green,      // PowerShell: ConsoleColor.DarkGreen
	'terminal.ansiBrightGreen':    colors.green,      // PowerShell: ConsoleColor.Green
	'terminal.ansiYellow':         colors.orange,     // PowerShell: ConsoleColor.DarkYellow
	'terminal.ansiBrightYellow':   colors.yellow,     // PowerShell: ConsoleColor.Yellow
	'terminal.ansiBlue':           colors.blueDark,   // PowerShell: ConsoleColor.DarkBlue
	'terminal.ansiBrightBlue':     colors.blueLight,  // PowerShell: ConsoleColor.Blue
	'terminal.ansiMagenta':        colors.purple,     // PowerShell: ConsoleColor.DarkMagenta
	'terminal.ansiBrightMagenta':  colors.pinkLight,  // PowerShell: ConsoleColor.Magenta
	'terminal.ansiCyan':           colors.teal,       // PowerShell: ConsoleColor.DarkCyan
	'terminal.ansiBrightCyan':     colors.teal,       // PowerShell: ConsoleColor.Cyan
	'terminal.ansiWhite':          grays.gray100,     // PowerShell: ConsoleColor.Gray
	'terminal.ansiBrightWhite':    '#FFF',            // PowerShell: ConsoleColor.White
	'terminal.selectionBackground': fade(grays.gray400, 0.5),
	'terminalCursor.background':   grays.gray700,
	'terminalCursor.foreground':   grays.gray200,

	// Debug
	'debugToolBar.background': grays.gray600,
	'debugToolBar.border': transparent,
	'editor.stackFrameHighlightBackground': fade(grays.gray800, 0.5),
	'editor.focusedStackFrameHighlightBackground': fade(grays.gray800, 0.65),

	// Welcome page
	'welcomePage.background': grays.gray700,
	'welcomePage.buttonBackground': colors.blueDark,
	'welcomePage.buttonHoverBackground': darken(colors.blueDark, 10),
	'walkThrough.embeddedEditorBackground': grays.gray700,

	// Git colors
	'gitDecoration.addedResourceForeground': colors.teal,
	'gitDecoration.modifiedResourceForeground': colors.green,
	'gitDecoration.deletedResourceForeground': colors.red,
	'gitDecoration.untrackedResourceForeground': colors.yellow,
	'gitDecoration.ignoredResourceForeground': grays.gray300,
	'gitDecoration.conflictingResourceForeground': colors.orange,
	'gitDecoration.submoduleResourceForeground': colors.blueLight,

	// Settings Editor colors
	'settings.headerForeground': '#FFF',
	'settings.modifiedItemIndicator': colors.blueDark,
	'settings.dropdownBackground': grays.gray800,
	'settings.dropdownForeground': grays.gray100,
	'settings.dropdownBorder': transparent,
	'settings.dropdownListBorder': transparent,
	'settings.checkboxBackground': grays.gray800,
	'settings.checkboxForeground': colors.blueLight,
	'settings.checkboxBorder': transparent,
	'settings.textInputBackground': grays.gray800,
	'settings.textInputForeground': grays.gray100,
	'settings.textInputBorder': transparent,
	'settings.numberInputBackground': grays.gray800,
	'settings.numberInputForeground': grays.gray100,
	'settings.numberInputBorder': transparent,

	// Breadcrumbs
	'breadcrumb.foreground': grays.gray200,
	'breadcrumb.background': grays.gray700,
	'breadcrumb.focusForeground': grays.gray100,
	'breadcrumb.activeSelectionForeground': '#FFF',
	'breadcrumbPicker.background': grays.gray700,

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
}

module.exports = uiColors
