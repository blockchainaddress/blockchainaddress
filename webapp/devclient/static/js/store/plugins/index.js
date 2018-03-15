/* store/plugins/index.js */

this.Plugins = (function() {
'use strict';
  
var Plugins = {};
  
var createLogger = Logger.createLogger;

Plugins.createPlugins = function(debug) {
  return debug
    ? [createLogger()]
    : [];
};

//
return Plugins ;
})();
