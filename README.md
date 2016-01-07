![typhonjs-core-parse-init](http://i.imgur.com/DRT8riA.png)

[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat)](https://github.com/typhonjs/typhonjs-core-parse-init/blob/master/LICENSE)

[![Build Status](https://travis-ci.org/typhonjs-parse/typhonjs-core-parse-init.svg?branch=master)](https://travis-ci.org/typhonjs-parse/typhonjs-core-parse-init)
[![Dependency Status](https://www.versioneye.com/user/projects/568e365e9c1b9802eb000001/badge.svg?style=flat)](https://www.versioneye.com/user/projects/568e365e9c1b9802eb000001)

Provides a minimal module for [JSPM](http://jspm.io) / [SystemJS](https://github.com/systemjs/systemjs) to initialize the [Parse JS API](http://www.parse.com) from a user mapped object `parseconfig`. Due to ES6 hoisting imports and SystemJS Builder static bundling it is necessary to import `parseinit` which is mapped to this module to ensure that the Parse API has been initialized before usage for modules which might access the Parse API during initialization of TyphonJS and other projects depending on [backbone-parse-es6](https://github.com/typhonjs/backbone-parse-es6). 

For a demo of usage of typhonjs-core-parse-init please see [backbone-parse-es6-demo](). 

For configuration please supply a user mapped path in a JSPM configuration file such as the following:
```
System.config(
{
   map:
   {
      'parseconfig': 'config/parse-config.js'
   }
});
```

`parse-config.js` should export an object literal with the Parse API and app keys necessary to initialize the Parse API. 

```
/**
 * parse-config.js -- Defines the production keys for Parse.
 */
'use strict';

export default {
   parseAppID: '<APP ID>',
   parseAPIKey: '<API KEY>'
};
```

Include typhonjs-core-parse-init as a dependency in the `jspm` entry in package.json:
```
  "jspm": {
    "dependencies": {
      "parse": "npm:parse@^1.6.8",
      "parseinit": "github:typhonjs/typhonjs-core-parse-init@master"
    },
    "devDependencies": {
      ...    
    }
  },
```

Then in the main app entry point and any other modules which may use the Parse API during import resolution simply include:
```
import 'parseinit'
```
