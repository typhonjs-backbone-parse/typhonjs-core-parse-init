/**
 * ParseInitialize -- Initializes Parse from 'parseconfig'.
 *
 * Note: We must use CJS here as ES6 imports are hoisted. By using CJS it's possible to set `Parse.CoreManager`
 * values such as forcing IS_NODE to be false before any Parse core code is loaded. This is a fix / workaround for:
 * https://github.com/ParsePlatform/Parse-SDK-JS/issues/193
 */

/* eslint-disable */

// Obtain the mapped parse config.
var parseconfig = require('parseconfig');

// If parseconfig is an ES6 export it uses a `default` namespace.
if (typeof parseconfig.default === 'object') { parseconfig = parseconfig.default; }

// Set Parse->CoreManager `IS_NODE` to false if force browser is true.
if (parseconfig.parseForceBrowser) { require('parse/lib/browser/CoreManager').set('IS_NODE', false); }

// Initialize Parse with app / key data.
require('parse').initialize(parseconfig.parseAppID, parseconfig.parseAPIKey);