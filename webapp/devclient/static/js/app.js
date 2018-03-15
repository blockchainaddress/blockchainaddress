/* app.js */
'use strict';

Vue.mixin(Title.titleMixin);

this.App = (function() {
'use strict';
var App = {};

App.createApp = function() {
  var i18n = I18n.createI18n();
  var store = Store.createStore(i18n);
  var router = Router.createRouter();

  VuexRouterSync.sync(store, router);

  var app = new Vue({
    router: router,
    store: store,
    i18n: i18n,
    render: function(h) { return h(AppComp); },
  });

  return { app: app, router: router, store: store };
};
//
return App;
})();
