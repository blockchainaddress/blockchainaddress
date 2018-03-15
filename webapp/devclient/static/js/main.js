/* main.js */
'use strict';

var o = App.createApp();

var app = o.app,
  router = o.router,
  store = o.store;

router.onReady(function() {
	app.$mount('#app')

  // 初回はHomeへ
  router.push({ name: 'home' });
});
