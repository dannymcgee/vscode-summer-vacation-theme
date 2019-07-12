/**
 * Returns a hex-formatted rgba color string with the alpha value set to the specified opacity
 * @param {string} color in format #XXX or #XXXXXX
 * @param {number} opacity float value from 0.0 - 1.0
 * @return {string} hex rgba color in format #XXXX or #XXXXXXXX
 */
function fade(color, opacity) {
	let hex

	if (opacity < 0 || opacity > 1)
		throw new Error(`Invalid value given for param opacity: ${opacity}
(must be a float between 0 and 1)`)

	if (color.length === 4 )
		hex = _convertToHex(opacity, 1)
	else if (color.length === 7)
		hex = _convertToHex(opacity, 2)
	else
		throw new Error(`Invalid value given for param color: ${color}
(must be a hex color string in format #XXX or #XXXXXX)`)
	
	console.log(`returning '${color}${hex}'`)
	return color + hex
}

function _convertToHex(float, digits = 2) {
	let dec, hex

	if (digits === 2) {
		dec = Math.round(float * 255)
		hex = dec.toString(16).padStart(2, '0')
	} else if (digits === 1) {
		dec = Math.round(float * 15) * 16
		hex = dec.toString(16).charAt(0)
	} else {
		throw new Error(`invalid value given for param digits: ${digits}
(must be 1 or 2)`)
	}
	return hex
}

module.exports = fade
