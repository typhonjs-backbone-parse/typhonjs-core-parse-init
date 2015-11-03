/**
 * ParseInitialize -- Initializes Parse from 'parseconfig'.
 */

'use strict';

import Parse         from 'parse';
import parseconfig   from 'parseconfig';

Parse.initialize(parseconfig.parseAppID, parseconfig.parseAPIKey);