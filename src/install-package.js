const path = require('path')
const shell = require('shelljs')
const package = require('../package.json')

const absPath = path.resolve('./')
const version = package.version
const name = package.name

shell.exec(`code --install-extension "${absPath}\\${name}-${version}.vsix"`)
