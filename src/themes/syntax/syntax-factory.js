const { darken, desaturate, fade } = require('../../colors/utils')

/**
 * @param {{
 *    foreground: string;
 *    string: string;
 *    constant: string;
 *    punctuation: string;
 *    class: string;
 *    function: string;
 *    error: string;
 *    control: string;
 *    variable: string;
 *    boolean: string;
 *    null: string;
 *    numeric: string;
 *    units: string;
 *    keyword: string;
 *    comment: string;
 *    docComment: string;
 *    this: string;
 *    property: string;
 *    type: string;
 *    tag: string;
 *    component: string;
 *    attribute: string;
 * }} tokens
 */
function SyntaxFactory(tokens) {
	return {
		tokenColors: [
			// #region Global
			{
				name: 'Global Settings',
				scope: '',
				settings: {
					foreground: tokens.foreground
				}
			},
			// #endregion

			// #region String
			{
				name: 'String',
				scope: [
					'string',
					'meta.attribute-selector.scss'
				],
				settings: {
					foreground: tokens.string
				}
			},
			{
				name: 'String quotes',
				scope: [ 'punctuation.definition.string' ],
				settings: {
					foreground: fade(tokens.string, 0.5)
				}
			},
			{
				name: 'String character escape',
				scope: [ 'string constant.character.escape' ],
				settings: {
					foreground: tokens.constant,
				}
			},
			// #endregion

			// #region RegExp
			{
				name: 'RegExp Group punctuation',
				scope: [ 'punctuation.definition.group.regexp' ],
				settings: {
					foreground: tokens.punctuation,
				}
			},
			{
				name: 'RegExp Character Class punctuation',
				scope: [ 'punctuation.definition.character-class.regexp' ],
				settings: {
					foreground: tokens.punctuation,
				}
			},
			{
				name: 'RegExp Character Class',
				scope: [ 'constant.other.character-class.regexp' ],
				settings: {
					foreground: tokens.class
				}
			},
			{
				name: 'RegExp Character Class set',
				scope: [
					'constant.other.character-class.range.regexp',
					'constant.other.character-class.set.regexp',
					'constant.other.character-class.set.regexp constant.other.character-class.regexp',
				],
				settings: {
					foreground: fade(tokens.punctuation, 0.5),
				}
			},
			{
				name: 'RegExp Escaped Character in Character Class set',
				scope: [
					'constant.other.character-class.set.regexp constant.character.escape'
				],
				settings: {
					foreground: fade(tokens.punctuation, 0.7),
				}
			},
			{
				name: 'RegExp Quantifier',
				scope: [ 'keyword.operator.quantifier.regexp' ],
				settings: {
					foreground: tokens.function
				}
			},
			{
				name: 'RegExp Lookarounds, Non-Capturing Group',
				scope: [
					'meta.assertion.look-ahead.regexp',
					'meta.assertion.look-behind.regexp',
					'punctuation.definition.group.no-capture.regexp',
				],
				settings: {
					foreground: fade(tokens.punctuation, 0.5),
				}
			},
			{
				name: 'RegExp Negations / Negatives',
				scope: [
					'keyword.operator.negation.regexp',
					'meta.assertion.negative-look-ahead.regexp',
					'meta.assertion.negative-look-behind.regexp',
				],
				settings: {
					foreground: tokens.error,
				}
			},
			{
				name: 'RegExp Control Character',
				scope: [ 'constant.character.control.regexp' ],
				settings: {
					foreground: tokens.control
				}
			},
			{
				name: 'RegExp Back-Reference',
				scope: [ 'keyword.other.back-reference.regexp' ],
				settings: {
					foreground: tokens.variable,
					fontStyle: ''
				}
			},
			{
				name: 'RegExp Anchors',
				scope: [ 'keyword.control.anchor.regexp' ],
				settings: {
					foreground: tokens.control,
					fontStyle: ''
				}
			},
			// #endregion

			// #region Language constants
			{
				name: 'Constant',
				scope: [
					'support.constant',
					'constant.language.boolean',
					'constant.language.null',
					'constant.language.php',
					'constant.other.boolean.toml',
					'entity.helper.apacheconf',
				],
				settings: {
					foreground: tokens.constant,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Numeric',
				scope: [
					'constant.numeric',
					'constant.integer',
				],
				settings: {
					foreground: tokens.numeric,
				}
			},
			{
				name: 'Units',
				scope: [
					'constant.numeric.unit',
					'keyword.other.unit'
				],
				settings: {
					foreground: tokens.units,
					fontStyle: ''
				}
			},
			{
				name: 'Numeric type annotations',
				scope: ['constant.numeric.type-annotation'],
				settings: {
					foreground: tokens.keyword,
				},
			},
			// #endregion

			// #region Keyword
			{
				name: 'Keyword',
				scope: [
					'keyword',
					'modifier',
					'storage.type',
					'storage.modifier',
					'support.module',
					'support.node',
					'support.type.object.module',
					'support.type.function',
					'support.type.primitive',
					'constant.language',
					'variable.language',
					'keyword.operator.expression',
					'keyword.operator.new',
					'keyword.operator.logical.scss',
					'keyword.operator.logical.css',
					'constant.character.entity.named',
					'support.variable.property.prototype',
					'support.function.construct.php',
				],
				settings: {
					foreground: tokens.keyword,
					fontStyle: 'italic'
				}
			},
			{
				name: 'Control',
				scope: [
					'keyword.control',
					'entity.other.ng-binding-name.template',
					'entity.other.ng-binding-name.ngFor',
					'entity.other.ng-binding-name.ngIf',
					'entity.other.ng-binding-name.ngSwitch',
					'entity.other.ng-binding-name.ngSwitchCase',
				],
				settings: {
					foreground: tokens.control,
					fontStyle: 'italic'
				}
			},
			{
				name: 'Named entity punctuation',
				scope: [ 'constant.character.entity.named punctuation.definition.entity' ],
				settings: {
					foreground: fade(tokens.keyword, 0.5)
				}
			},
			// #endregion

			// #region Decorator / Macro
			{
				name: 'Decorator / Attribute / Macro',
				scope: [
					'punctuation.definition.decorator.python',
					'meta.function.decorator.python support.type.python',
					'support.other.attribute.cpp',
					'support.annotation',
					'entity.name.pragma',
				],
				settings: {
					foreground: tokens.attribute,
					fontStyle: 'bold',
				},
			},
			{
				name: 'Attribute parameter',
				scope: ['entity.other.attribute'],
				settings: {
					foreground: tokens.type,
					fontStyle: 'italic',
				}
			},
			// #endregion

			// #region Comment
			{
				name: 'Comment',
				scope: [ 'comment' ],
				settings: {
					foreground: tokens.comment,
					fontStyle: 'italic'
				}
			},
			{
				name: 'Doc Comment',
				scope: [
					'comment.line.documentation',
					'comment.block.documentation',
				],
				settings: {
					foreground: tokens.docComment,
					fontStyle: '',
				}
			},
			{
				name: 'Doc comment delimiters',
				scope: [
					'comment.line.documentation punctuation.definition.comment',
					'comment.block.documentation punctuation.definition.comment',
				],
				settings: {
					foreground: tokens.comment,
					fontStyle: '',
				}
			},
			// #endregion

			// #region Punctuation
			{
				name: 'Punctuation (general)',
				scope: [
					'meta.tag',
					'meta.brace',
					'constant.character.punctuation',
					'string punctuation',
					'punctuation.definition.entity',
					'punctuation.definition.parameters',
					'punctuation.definition.attribute-selector',
					'punctuation.definition.sub-target',
					'punctuation.brackets.round',
				],
				settings: {
					foreground: tokens.foreground,
					fontStyle: ''
				}
			},
			{
				name: 'Punctuation (special)',
				scope: [
					'punctuation.definition.tag',
					'punctuation.definition.interpolation',
					'punctuation.definition.template-expression',
					'punctuation.definition.ng-attribute-name',
					'punctuation.definition.ng-binding-name',
					'punctuation.definition.lit-binding',
					'punctuation.section.embedded',
					'support.function.construct.begin.blade',
					'support.function.construct.end.blade',
					'keyword.operator',
					'storage.type.function.arrow',
					'punctuation.separator',
					'punctuation.accessor',
					'punctuation.terminator',
					'punctuation.comma',
					'punctuation.semi',
					'punctuation.brackets.attribute',
					'punctuation.definition.attribute',
					'entity.name.tag.wildcard',
					'entity.name.tag.reference.scss',
					'punctuation.decorator.ts',
					'storage.modifier.pointer',
					'storage.modifier.reference',
					'entity.name.function.operator',
					'punctuation.builtin-function.zig',
					'meta.interpolation.go',
					'punctuation.definition.pragma',
				],
				settings: {
					foreground: tokens.punctuation,
					fontStyle: ''
				}
			},
			// #endregion

			// #region Variable
			{
				name: 'Variable',
				scope: [
					'variable',
					'support.variable',
					'entity.name.variable',
					'constant.language.import-export-all',
					'punctuation.definition.variable',
					'meta.control.substitute.target',
					'source.rust meta.attribute',
				],
				settings: {
					foreground: tokens.variable
				}
			},
			{
				name: 'Function Parameter',
				scope: [
					'meta.function.parameters variable',
					'variable.parameter',
				],
				settings: {
					foreground: tokens.variable,
					fontStyle: 'italic',
				},
			},
			{
				name: 'Variable delimiters',
				scope: ['punctuation.definition.ident.variable'],
				settings: {
					foreground: fade(tokens.variable, 0.5),
				}
			},
			// #endregion

			// #region This
			{
				name: 'This',
				scope: [
					'variable.language.this',
					'keyword.other.this',
					'variable.language.this.php punctuation.definition.variable.php',
					'variable.language.result',
				],
				settings: {
					foreground: tokens.this,
					fontStyle: 'italic',
				}
			},
			{
				name: 'Self (GDScript)',
				scope: ['variable.language.this.gdscript'],
				settings: {
					foreground: tokens.keyword,
					fontStyle: 'italic',
				},
			},
			// #endregion

			// #region Property
			{
				name: 'Property / Field',
				scope: [
					'property',
					'variable.property',
					'variable.object.property',
					'support.variable.property',
					'variable.other.constant.property',
					'variable.other.object.property',
					'variable.other.property',
					'field',
					'variable.field',
					// 'variable.other.enummember',
					'entity.name.label',
					'meta.object-literal.key',
					'meta.object-literal.key string',
					'meta.property-name',
					'support.type.property-name',
					'entity.name.variable.field',
					'meta.control.substitute',
					'string.key.json5',
				],
				settings: {
					foreground: tokens.property
				}
			},
			{
				name: 'Property quotes',
				scope: [
					'punctuation.support.type.property-name',
					'meta.object-literal.key punctuation.definition.string',
					'punctuation.definition.ident.property',
				],
				settings: {
					foreground: fade(tokens.property, 0.5)
				}
			},
			// #endregion

			// #region Class / Enum / Struct
			{
				name: 'Class',
				scope: [
					'support.class',
					// 'support.constant',
					'entity.name.class',
					'new.expr entity.name.type',
					'entity.name.type.class',
					'entity.name.type.instance',
					'entity.name.type.enum',
					'entity.name.type.struct',
					'meta.var.expr meta.function-call entity.name.class',
					'meta.var.expr new.expr entity.name.type',
					'entity.other.attribute-name.class.css',
					'entity.other.inherited-class',
					'storage.type.class.AFDKO',
				],
				settings: {
					foreground: tokens.class,
					fontStyle: ''
				}
			},
			// #endregion

			// #region Type / Enum Member
			{
				name: 'Type (custom)',
				scope: [
					'entity.name.type',
					'support.type.graphql',
					'storage.type.cs',
					'new.expr meta.type.parameters entity.name.type',
					'entity.name.scope-resolution',
					'entity.name.type.namespace.cs',
					'entity.name.namespace',
					'variable.other.enummember',
					'entity.name.variable.enum-member',
					'constant.other.class.php',
					'constant.other.php',
					'support.other.namespace',
				],
				settings: {
					foreground: tokens.type,
					fontStyle: 'italic'
				}
			},
			{
				name: 'Type delimiters',
				scope: [
					'punctuation.definition.ident.type',
					'punctuation.definition.ident.enummember',
				],
				settings: {
					foreground: fade(tokens.type, 0.5),
				},
			},
			{
				name: 'Type (primitive/built-in)',
				scope: [
					'meta.type.annotation.ts support.type.primitive',
					'meta.type.annotation.ts support.type.builtin',
					'meta.return.type.ts support.type.primitive',
					'meta.return.type.ts support.type.builtin',
					'support.type.builtin.graphql',
					'builtin',
				],
				settings: {
					foreground: tokens.keyword,
					fontStyle: 'italic'
				}
			},
			// #endregion

			// #region Builtin Function
			{
				name: 'Function (builtin)',
				scope: [
					'entity.name.function.builtin',
				],
				settings: {
					foreground: tokens.function,
					fontStyle: 'italic',
				},
			},
			// #endregion

			// #region Function
			{
				name: 'Function',
				scope: [
					'entity.name.function',
					'support.function',
					'meta.function entity.name.function',
					'meta.definition.method entity.name.function',
					'meta.function-call.generic',
				],
				settings: {
					foreground: tokens.function
				}
			},
			{
				name: 'Function identifer delimiters (Nim is weird)',
				scope: [
					'punctuation.definition.ident.proc',
					'punctuation.definition.ident.method',
					'punctuation.definition.ident.template',
					'punctuation.definition.ident.macro',
					'punctuation.definition.ident.iterator',
					'punctuation.definition.ident.converter',
					'punctuation.definition.ident.func',
				],
				settings: {
					foreground: fade(tokens.function, 0.5)
				},
			},
			// #endregion

			// #region Tag
			{
				name: 'Tag name',
				scope: [
					'entity.name.tag',
					'entity.tag.apacheconf',
				],
				settings: {
					foreground: tokens.tag
				}
			},
			{
				name: 'Component',
				scope: [
					'meta.tag.custom entity.name.tag',
					'entity.name.tag support.class.component'
				],
				settings: {
					foreground: tokens.component
				}
			},
			{
				name: 'Pseudo-element',
				scope: [ 'entity.other.attribute-name.pseudo-element.css' ],
				settings: {
					foreground: tokens.tag,
					fontStyle: 'italic'
				}
			},
			// #endregion

			// #region HTML Attribute
			{
				name: 'HTML Attribute',
				scope: [ 'entity.other.attribute-name' ],
				settings: {
					foreground: tokens.property,
					fontStyle: 'italic'
				}
			},
			{
				name: 'HTML Attribute (class)',
				scope: [
					'meta.attribute.class.html entity.other.attribute-name.html',
					'entity.other.ng-binding-name.ngClass',
					'entity.other.ng-binding-name.class',
				],
				settings: {
					foreground: tokens.class,
					fontStyle: 'italic'
				}
			},
			// #endregion

			// #region CSS/HTML
			{
				name: 'CSS property value',
				scope: [
					'support.constant.property-value.css',
					'entity.other.keyframe-offset.css'
				],
				settings: {
					foreground: tokens.punctuation,
					fontStyle: 'italic'
				}
			},
			{
				name: 'CSS keyframe offset percentage',
				scope: [ 'entity.other.keyframe-offset.percentage.css' ],
				settings: {
					foreground: tokens.numeric
				}
			},
			{
				name: 'CSS color',
				scope: [
					'constant.other.color',
					'support.constant.color'
				],
				settings: {
					foreground: tokens.foreground
				}
			},
			{
				name: 'CSS pseudo-class selector',
				scope: ['entity.other.attribute-name.pseudo-class'],
				settings: {
					foreground: tokens.class,
					fontStyle: 'italic'
				}
			},
			{
				name: 'CSS pseudo-element selector',
				scope: ['entity.other.attribute-name.pseudo-element'],
				settings: {
					foreground: tokens.tag,
					fontStyle: 'italic'
				}
			},
			{
				name: 'HTML/CSS ID',
				scope: [
					'meta.attribute.id.html entity.other.attribute-name.html',
					'entity.other.attribute-name.id.css',
					'entity.other.attribute-name.id.css punctuation.definition.entity.css'
				],
				settings: {
					foreground: tokens.function,
					fontStyle: 'italic'
				}
			},
			{
				name: 'PHP tags',
				scope: [
					'punctuation.section.embedded.begin.php',
					'punctuation.section.embedded.end.php'
				],
				settings: {
					foreground: tokens.attribute,
					fontStyle: 'bold',
				}
			},
			{
				name: 'Embedded HTML',
				scope: ['string.js.taggedTemplate meta.embedded.block.html'],
				settings: {
					foreground: tokens.foreground,
				},
			},
			// #endregion

			// #region Markdown
			{
				name: 'Markdown heading',
				scope: [ 'markup.heading' ],
				settings: {
					foreground: tokens.class
				}
			},
			{
				name: 'Markdown blockquote',
				scope: [ 'text.html.markdown markup.quote' ],
				settings: {
					foreground: tokens.punctuation
				}
			},
			{
				name: 'Markdown italic',
				scope: [ 'markup.italic' ],
				settings: {
					foreground: tokens.foreground,
					fontStyle: 'italic'
				}
			},
			{
				name: 'Markdown bold',
				scope: [ 'markup.bold' ],
				settings: {
					foreground: tokens.foreground,
					fontStyle: 'bold'
				}
			},
			{
				name: 'Markdown bold italic',
				scope: [
					'markup.bold markup.italic',
					'markup.italic markup.bold'
				],
				settings: {
					foreground: tokens.foreground,
					fontStyle: 'italic bold'
				}
			},
			{
				name: 'Markdown link',
				scope: [
					'markup.underline.link.markdown',
					'markup.underline.link.image.markdown'
				],
				settings: {
					foreground: tokens.property
				}
			},
			{
				name: 'Markdown code',
				scope: [ 'markup.inline.raw.string.markdown' ],
				settings: {
					foreground: tokens.punctuation
				}
			},
			{
				name: 'Markdown punctuation',
				scope: [
					'punctuation.definition.markdown',
					'punctuation.definition.string.begin.markdown',
					'punctuation.definition.string.end.markdown',
					'punctuation.definition.metadata.markdown',
					'punctuation.definition.raw.markdown',
					'punctuation.definition.bold.markdown',
					'punctuation.definition.italic.markdown',
				],
				settings: {
					foreground: tokens.punctuation,
				}
			},
			{
				name: 'Markdown list item bullet',
				scope: [ 'punctuation.definition.list.begin.markdown' ],
				settings: {
					foreground: '#FFF',
					// fontStyle: 'bold'
				}
			},
			{
				name: 'Markdown list item bullet (comment block)',
				scope: [
					'comment.block.documentation.ts markup.list.unnumbered.markdown punctuation.definition.list.begin.markdown',
					'comment.block.documentation.js markup.list.unnumbered.markdown punctuation.definition.list.begin.markdown',
				],
				settings: {
					foreground: tokens.punctuation
				}
			},
			// #endregion

			// #region INI
			{
				name: 'INI property name',
				scope: [
					'keyword.other.definition.ini',
					'entity.name.tag.toml'
				],
				settings: {
					foreground: tokens.property
				}
			},
			{
				name: 'INI section title',
				scope: [
					'entity.name.section.group-title.ini',
					'entity.other.attribute-name.table.toml',
					'entity.other.attribute-name.table.array.toml',
				],
				settings: {
					foreground: tokens.class
				}
			},
			{
				name: 'INI punctuation (general)',
				scope: [
					'puncutation.definition.group.value',
					'punctuation.definition.section.group-title.begin.ini',
					'punctuation.definition.section.group-title.end.ini',
					'keyword.operator.assignment.ini',
				],
				settings: {
					foreground: tokens.foreground,
					fontStyle: ''
				}
			},
			{
				name: 'INI punctuation (special)',
				scope: [ 'entity.name.section.group-title.ini character.constant.punctuation.ini' ],
				settings: {
					foreground: tokens.punctuation
				}
			},
			// #endregion
		],
		semanticTokenColors: {
			'comment.documentation': {
				foreground: tokens.docComment,
				italic: false,
			},
			field: {
				foreground: tokens.property,
				italic: false,
			},
			property: {
				foreground: tokens.property,
				italic: false,
			},
			parameter: {
				foreground: tokens.variable,
				italic: true,
			},
			brace:       { foreground: tokens.foreground },
			bracket:     { foreground: tokens.foreground },
			parenthesis: { foreground: tokens.foreground },
			comma:       { foreground: tokens.punctuation },
			semicolon:   { foreground: tokens.punctuation },
			colon:       { foreground: tokens.punctuation },
			'type.defaultLibrary': {
				foreground: tokens.keyword,
				italic: true,
			},
			'variable.readonly.defaultLibrary': {
				foreground: tokens.constant,
				italic: true,
			},
			// Zig
			'type:zig': {
				foreground: tokens.keyword,
				italic: true,
			},
			'type.struct:zig': {
				foreground: tokens.class,
				italic: false,
			},
			'type.enum:zig': {
				foreground: tokens.class,
				italic: false,
			},
			'type.namespace:zig': {
				foreground: tokens.type,
				italic: true,
			},
			'tagField:zig': {
				foreground: tokens.type,
				italic: true,
			},
			'errorTag:zig': {
				foreground: tokens.type,
				italic: true,
			},
			'builtin:zig': {
				foreground: tokens.function,
				italic: true,
			},
			'keywordLiteral': {
				foreground: tokens.constant,
				italic: true,
			},
			type: {
				foreground: tokens.type,
				italic: true,
			},
			// Rust
			'struct:rust': {
				foreground: tokens.class,
				italic: false,
			},
			'selfKeyword:rust': {
				foreground: tokens.this,
				italic: true,
			},
			'builtinType:rust': {
				foreground: tokens.keyword,
				italic: true,
			},
			'enum:rust': {
				foreground: tokens.class,
				italic: false,
			},
			'enumMember:rust': {
				foreground: tokens.type,
				italic: true,
			},
			'macro:rust': {
				foreground: tokens.attribute,
				italic: false,
				bold: true,
			},
			'function.attribute:rust': {
				foreground: tokens.attribute,
				bold: true,
				italic: false,
			},
			'lifetime:rust': {
				foreground: tokens.constant,
				italic: true,
			},
			'label:rust': {
				foreground: tokens.constant,
				italic: true,
			},
			'generic:rust': {
				foreground: tokens.variable,
				italic: false,
				bold: false,
			},
		},
	}
}

module.exports = SyntaxFactory
