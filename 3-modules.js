//CommonJS, every file is module by default
//Modules -Encapsulated Code (only share minimum)
require('./4-mind-grenade')
const {mahdi, tarek} = require('./3-1names')
const sayHi = require('./3-1utils')
sayHi(mahdi)
sayHi(tarek)