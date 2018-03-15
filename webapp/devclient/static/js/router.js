/* router.js */

Vue.use(VueRouter);

this.Router = (function() {
var Router = {};

Router.pathList = {
  home: '/',
  generate: '/generate',
  result: '/result',
};

Router.createRouter = function() {
	return new VueRouter({
		routes: [
			{ path: '/', name: 'home', component: Home },
			{ path: '/generate', name: 'generate', component: Generate },
			{ path: '/result', name: 'result', component: Result },
			{ path: '*', redirect: '/' }
		],
	});
};
//
return Router;
})();
