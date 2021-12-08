const cp = require('child_process')
const path = require('path')
const package = require('../package.json')

const absPath = path.resolve('./')
const version = package.version
const name = package.name

;(async function () {
	try {
		await spawn("code", [
			"--install-extension",
			`"${absPath}\\${name}-${version}.vsix"`,
		])
	} catch (err) {
		if (typeof err === 'number')
			process.exit(err)
		else {
			console.error(err)
			process.exit(1)
		}
	}

	process.exit(0)
})()

/**
 * @param {string} cmd
 * @param {string[]} args
 *
 * @returns {Promise<void>}
 */
function spawn(cmd, args) {
	return new Promise((resolve, reject) => {
		let proc = cp.spawn(cmd, args, {
			shell: true,
			stdio: "inherit",
		})

		proc.on("close", onExit)
		proc.on("exit", onExit)
		proc.on("error", reject)

		function onExit(code = 0) {
			if (code) reject(code)
			else resolve()
		}
	})
}
