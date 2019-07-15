const grays = require('../../colors/grays')
const colors = require('../../colors/dark-palette')
const { fade, lighten } = require('../../colors/utils')

function SyntaxFactory(tokens) {
	return [
		// Global
		{
			name: 'Global Settings',
			scope: '',
			settings: {
				foreground: tokens.foreground
			}
		},
	
		// String
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
	
		// Language constants
		{
			name: 'Boolean',
			scope: [ 'constant.language.boolean' ],
			settings: {
				foreground: tokens.boolean,
				fontStyle: 'italic'
			}
		},
		{
			name: 'Null',
			scope: [ 'constant.language.null' ],
			settings: {
				foreground: tokens.null,
				fontStyle: 'italic'
			}
		},
		{
			name: 'Numeric',
			scope: [ 'constant.numeric' ],
			settings: {
				foreground: tokens.numeric,
			}
		},
		{
			name: 'PHP',
			scope: [ 'constant.other.php' ],
			settings: {
				foreground: tokens.constant
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
	
		// Keyword
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
				'punctuation.definition.decorator.python',
				'meta.function.decorator.python support.type.python',
				'support.variable.property.prototype',
				'entity.other.attribute-name.pseudo-element'
			],
			settings: {
				foreground: tokens.keyword,
				fontStyle: 'italic'
			}
		},
		{
			name: 'Control',
			scope: [ 'keyword.control' ],
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
	
		// Comment
		{
			name: 'Comment',
			scope: [ 'comment' ],
			settings: {
				foreground: tokens.comment,
				fontStyle: 'italic'
			}
		},
	
		// Punctuation
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
				'punctuation.definition.sub-target'
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
				'punctuation.section.embedded',
				'support.function.construct.begin.blade',
				'support.function.construct.end.blade',
				'keyword.operator',
				'storage.type.function.arrow',
				'punctuation.separator',
				'punctuation.accessor',
				'punctuation.terminator',
				'entity.name.tag.wildcard',
				'entity.name.tag.reference.scss',
				'punctuation.decorator.ts'
			],
			settings: {
				foreground: tokens.punctuation,
				fontStyle: ''
			}
		},
	
		// Variable
		{
			name: 'Variable',
			scope: [
				'variable',
				'support.variable',
				'entity.name.variable',
				'constant.language.import-export-all',
				'punctuation.definition.variable',
				'meta.control.substitute.target'
			],
			settings: {
				foreground: tokens.variable
			}
		},
	
		// This
		{
			name: 'This',
			scope: [ 'variable.language.this' ],
			settings: {
				foreground: tokens.this,
				fontStyle: 'italic'
			}
		},
	
		// Property
		{
			name: 'Property',
			scope: [
				'variable.object.property',
				'support.variable.property',
				'variable.other.constant.property',
				'variable.other.object.property',
				'variable.other.property',
				'entity.name.label',
				'meta.object-literal.key',
				'meta.object-literal.key string',
				'meta.property-name',
				'support.type.property-name',
				'entity.name.variable.enum-member',
				'entity.name.variable.field',
				'meta.control.substitute',
				'string.key.json5'
			],
			settings: {
				foreground: tokens.property
			}
		},
		{
			name: 'Property quotes',
			scope: [
				'punctuation.support.type.property-name',
				'meta.object-literal.key punctuation.definition.string'
			],
			settings: {
				foreground: fade(tokens.property, 0.5)
			}
		},
	
		// Class
		{
			name: 'Class',
			scope: [
				'support.class',
				'support.constant',
				'entity.name.class',
				'entity.name.type',
				'entity.name.type.class',
				'entity.name.type.instance',
				'meta.var.expr meta.function-call entity.name.class',
				'meta.var.expr new.expr entity.name.type',
				'entity.other.attribute-name.class.css',
				'entity.other.inherited-class',
				'entity.name.type.namespace.cs',
				'storage.type.class.AFDKO',
			],
			settings: {
				foreground: tokens.class,
				fontStyle: ''
			}
		},
		{
			name: 'Class italicized',
			scope: [
				'entity.name.class.inherited',
				'entity.other.inherited-class',
				'meta.type.annotation entity.name.type',
				'meta.return.type entity.name.type',
				'meta.var.expr entity.name.type',
				'meta.type.parameters entity.name.type',
				'entity.other.attribute-name.pseudo-class',
				'meta.attribute.class.html entity.other.attribute-name.html',
			],
			settings: {
				foreground: tokens.class,
				fontStyle: 'italic'
			}
		},
	
		// Function
		{
			name: 'Function',
			scope: [
				'entity.name.function',
				'support.function',
				'meta.function entity.name.function',
				'meta.definition.method entity.name.function',
				'meta.function-call.generic'
			],
			settings: {
				foreground: tokens.function
			}
		},
	
		// Tag
		{
			name: 'Tag name',
			scope: [ 'entity.name.tag' ],
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
	
		// Attribute
		{
			name: 'Attribute',
			scope: [ 'entity.other.attribute-name' ],
			settings: {
				foreground: tokens.attribute,
				fontStyle: 'italic'
			}
		},
	
		// CSS/HTML
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
			name: 'HTML/CSS ID',
			scope: [
				'meta.attribute.id.html entity.other.attribute-name.html',
				'entity.other.attribute-name.id.css',
				'entity.other.attribute-name.id.css punctuation.definition.entity.css'
			],
			settings: {
				foreground: colors.blueLight,
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
				foreground: fade(tokens.keyword, 0.5),
				fontStyle: 'italic'
			}
		},
	
		// TypeScript
		{
			name: 'TypeScript type annotations (class)',
			scope: [
				'meta.type.annotation.ts entity.name.type',
				'meta.return.type.ts entity.name.type'
			],
			settings: {
				foreground: fade(tokens.class, 0.6),
				fontStyle: 'italic'
			}
		},
		{
			name: 'TypeScript type annotations (primitive)',
			scope: [
				'meta.type.annotation.ts support.type.primitive',
				'meta.type.annotation.ts support.type.builtin',
				'meta.return.type.ts support.type.primitive',
				'meta.return.type.ts support.type.builtin',
			],
			settings: {
				foreground: fade(tokens.keyword, 0.6),
				fontStyle: 'italic'
			}
		},
		{
			name: 'TypeScript type annotation punctuation',
			scope: [
				'meta.type.annotation.ts meta.brace',
				'meta.type.annotation.ts punctuation.definition',
				'meta.type.annotation.ts punctuation.accessor',
				'meta.return.type.ts meta.brace',
				'meta.return.type.ts punctuation.definition',
				'meta.return.type.ts punctuation.accessor',
			],
			settings: {
				foreground: fade(tokens.punctuation, 0.6),
				fontStyle: 'italic'
			}
		},
	
		// Markdown
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
				'punctuation.definition.list.begin.markdown',
				'punctuation.definition.bold.markdown',
				'punctuation.definition.italic.markdown',
			],
			settings: {
				foreground: grays.gray300
			}
		},
	
		// INI
		{
			name: 'INI property name',
			scope: [ 'keyword.other.definition.ini' ],
			settings: {
				foreground: tokens.property
			}
		},
		{
			name: 'INI section title',
			scope: [ 'entity.name.section.group-title.ini' ],
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
	
		// tmLanguage
		{
			name: 'tmLanguage quotes',
			scope: [
				'source.tmLanguage punctuation.definition.property-name',
				'source.tmLanguage punctuation.definition.string',
			],
			settings: {
				foreground: lighten(tokens.background, 10)
			}
		},
		{
			name: 'tmLanguage `patterns` key',
			scope: [ 'support.type.property-name.patterns.tmLanguage' ],
			settings: {
				foreground: tokens.constant
			}
		},
		{
			name: 'tmLanguage `include` key',
			scope: [ 'support.type.property-name.include.tmLanguage' ],
			settings: {
				foreground: tokens.keyword,
				fontStyle: 'italic'
			}
		},
		{
			name: 'tmLanguage `repository` key',
			scope: [ 'support.type.property-name.repository.tmLanguage' ],
			settings: {
				foreground: tokens.class
			}
		},
		{
			name: 'tmLanguage `comment` key',
			scope: [ 'support.type.property-name.comment.tmLanguage' ],
			settings: {
				foreground: tokens.comment,
				fontStyle: 'italic'
			}
		},
		{
			name: 'tmLanguage scope',
			scope: [
				'support.type.scope-base.tmLanguage',
				'support.type.scope-name.tmLanguage'
			],
			settings: {
				foreground: tokens.variable
			}
		},
		{
			name: 'tmLanguage scope language',
			scope: [ 'support.type.scope-lang.tmLanguage' ],
			settings: {
				foreground: tokens.constant
			}
		},
		{
			name: 'tmLanguage regex character literal',
			scope: [ 'regex.character.literal.tmLanguage' ],
			settings: {
				foreground: tokens.string
			}
		},
		{
			name: 'tmLanguage regex wildcard',
			scope: [ 'regex.wildcard.tmLanguage' ],
			settings: {
				foreground: tokens.constant
			}
		},
		{
			name: 'tmLanguage regex punctuation (general)',
			scope: [ 'punctuation.definition.regex-group' ],
			settings: {
				foreground: tokens.foreground
			}
		},
		{
			name: 'tmLanguage regex punctuation (special)',
			scope: [
				'punctuation.definition.regex-group-any',
				'punctuation.definition.regex-group-quantifier',
				'regex.character.anchor.tmLanguage',
				'regex.group-modifier.tmLanguage'
			],
			settings: {
				foreground: tokens.punctuation
			}
		},
		{
			name: 'tmLanguage regex OR',
			scope: [ 'regex.character.or.tmLanguage' ],
			settings: {
				foreground: tokens.class
			}
		},
		{
			name: 'tmLanguage regex string escape',
			scope: [ 'regex.escape-string.tmLanguage' ],
			settings: {
				foreground: lighten(tokens.background, 5)
			}
		},
		{
			name: 'tmLanguage regex escape',
			scope: [ 'regex.escape-regex.tmLanguage' ],
			settings: {
				foreground: fade(tokens.string, 0.5)
			}
		},
		{
			name: 'tmLanguage regex negative group modifier',
			scope: [ 'regex.group-modifier.negative.tmLanguage' ],
			settings: {
				foreground: colors.red
			}
		},
		{
			name: 'tmLanguage regex quantifier',
			scope: [ 'regex.character.quantifier.tmLanguage' ],
			settings: {
				foreground: colors.blueDark
			}
		},
		{
			name: 'tmLanguage regex wildcard `.`',
			scope: [ 'regex.character.wildcard-any' ],
			settings: {
				foreground: colors.orange,
				fontStyle: 'bold'
			}
		}
	]
}

module.exports = SyntaxFactory