/* util/title.js */

this.Title = (function() {
'use strict';
var Title = {};
  
// set title for component
Title.titleMixin = {
  mounted: function() {
    var title = getTitle(this)
    if (title) {
      document.title = 'Multi Paper Wallet | ' + title;
    }
  }
};

// get component title
function getTitle (vm) {
  var title = vm.$options.title;
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title;
  }
}
//
return Title;
})();
