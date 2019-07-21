Array.prototype.cycle = function(index) {
	const length = this.length
	const _cycle = () => {
		if (index >= length) {
			index -= length
			return _cycle()
		}
		return index
	}

	if (index < 0)
		index += length
	
	return _cycle()
}

Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max)
}

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
		hex = _floatToHex(opacity, 1)
	else if (color.length === 7)
		hex = _floatToHex(opacity, 2)
	else
		throw new Error(`Invalid value given for param color: ${color}
(must be a hex color string in format #XXX or #XXXXXX)`)
	
	return color + hex
}

/**
 * Lightens the given color by the given amount
 * @param {string} color in format #XXXXXX
 * @param {number} amount as a percentage, unitless
 * @return {string} hex color in format #XXXXXX
 */
function lighten(color, amount) {
	let rgb = _hexToRGB(color)
	const hsl = _RGBToHSL(rgb)
	hsl[2] = (hsl[2] + amount).clamp(0, 100)
	rgb = _HSLToRGB(hsl)

	return _RGBToHex(rgb)
}

/**
 * Saturates the given color by the given amount
 * @param {string} color in format #XXXXXX 
 * @param {number} amount as a percentage, unitless
 * @return {string} hex color in format #XXXXXX
 */
function saturate(color, amount) {
	let rgb = _hexToRGB(color)
	const hsl = _RGBToHSL(rgb)
	hsl[1] = (hsl[1] + amount).clamp(0, 100)
	rgb = _HSLToRGB(hsl)
	
	return _RGBToHex(rgb)
}

/**
 * Desaturates the given color by the given amount
 * @param {string} color in format #XXXXXX 
 * @param {number} amount as a percentage, unitless
 * @return {string} hex color in format #XXXXXX
 */
function desaturate(color, amount) {
	let rgb = _hexToRGB(color)
	const hsl = _RGBToHSL(rgb)
	hsl[1] = (hsl[1] - amount).clamp(0, 100)
	rgb = _HSLToRGB(hsl)
	
	return _RGBToHex(rgb)
}

/**
 * Darkens the given color by the given amount
 * @param {string} color in format #XXXXXX
 * @param {number} amount as a percentage, unitless
 * @return {string} hex color in format #XXXXXX
 */
function darken(color, amount) {
	let rgb = _hexToRGB(color)
	const hsl = _RGBToHSL(rgb)
	hsl[2] = (hsl[2] - amount).clamp(0, 100)
	rgb = _HSLToRGB(hsl)

	return _RGBToHex(rgb)
}

function _floatToHex(float, digits = 2) {
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

function _hexToRGB(color) {
	let _color = color.substr(1)
	let hex = []
	const rgb = []

	// construct an array of the hex values
	if (_color.length === 3) {
		// double each character
		hex = _color.split('')
		for (let i = 0; i < hex.length; i++)
			hex[i] += hex[i]
	} else if (_color.length === 6) {
		// split into blocks of two characters
		const hexTemp = _color.split('')
		for (let i = 0; i < 3; i++) {
			let h = ''
			for (let ii = 0; ii < 2; ii++)
				h += hexTemp.shift()
			hex.push(h)
		}
	} else {
		// not a valid hex string
		throw new Error(`invalid value given for param color: ${color}
(must be a hex color string in format #XXX or #XXXXXX)`)
	}

	// convert each hex value to decimal
	for (const h of hex) {
		rgb.push(parseInt(h, 16))
	}
	return rgb
}

function _RGBToHex(rgb) {
	let hexStr = '#'

	for (let value of rgb) {
		value /= 255
		hexStr += _floatToHex(value, 2)
	}

	return hexStr.toUpperCase()
}

function _RGBToHSL(rgb) {
	let
		r = rgb[0] / 255,
		g = rgb[1] / 255,
		b = rgb[2] / 255

	let
		cMin = Math.min(r, g, b),
		cMax = Math.max(r, g, b),
		cDelta = cMax - cMin,
		h = 0,
		s = 0,
		l = 0
	
	// Calculate hue
	if (cDelta === 0)
		h = 0
	else if (cMax === r)
		h = ((g - b) / cDelta) % 6
	else if (cMax === g)
		h = ((b - r) / cDelta + 2)
	else if (cMax === b)
		h = ((r - g) / cDelta + 4)
	h = Math.round(h * 60)
	if (h < 0)
		h += 360

	// Calculate lightness
	l = (cMax + cMin) / 2
	
	// Calculate saturation
	s = cDelta === 0
		? 0
		: cDelta / (1 - Math.abs(2 * l - 1))
	
	s = +(s * 100).toFixed(1)
	l = +(l * 100).toFixed(1)

	return [h, s, l]
}

function _HSLToRGB(hsl) {
	const rgb = [0, 0, 0]
	let
		h = hsl[0],
		s = hsl[1] / 100,
		l = hsl[2] / 100,
		chroma = (1 - Math.abs(2 * l - 1)) * s,
		second = chroma * (1 - Math.abs((h / 60) % 2 - 1)),
		match = l - chroma / 2
	
	for (
		let
			i = 0,
			target = 0,
			step = 120;
		i < 3;
		i++, target += step
	) {
		if (_checkHueSlice(target, h)) {
			rgb[i] = chroma
			rgb[rgb.cycle(i + 1)] = second
		} else if (_checkHueSlice(target, h, true)) {
			rgb[i] = chroma
			rgb[rgb.cycle(i - 1)] = second
		}
	}

	for (let i = 0; i < rgb.length; i++) {
		let value = rgb[i]
		value = Math.round((value + match) * 255)
		rgb[i] = value
	}

	return rgb
}

function _checkHueSlice(target, hue, reverse) {
	if (reverse)
		return (hue < _hueCycle(target) && hue > _hueCycle(target - 60))
	else
		return (hue >= target && hue < _hueCycle(target + 60))
}

function _hueCycle(deg) {
	if (deg === 0)
		return 360
	
	if (deg < 0)
		return deg + 360
	
	if (deg > 360)
		return 360 - deg
	
	return deg
}

module.exports = { fade, lighten, darken, saturate, desaturate }
