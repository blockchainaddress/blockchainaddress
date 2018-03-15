/* appcomp.js */

this.AppComp = (function() {
  
var pathList = Router.pathList;

function getPathIndex(path) {
  var idx = 0;
  for (var key in pathList) {
    if (path === pathList[key]) break;
    idx++;
  }
  return idx;
}

return Vue.extend({
	template: document.querySelector('template[id=tmpl-app]'),

  data: function() {
    return {
      pathList: pathList,
    };
  },

  methods: (function() {
    var methods = Vuex.mapMutations('I18n', [
      'setLocale'
    ]);

    methods.isVisited = function(path, currentPath) {
      return getPathIndex(path) <= getPathIndex(currentPath);
    };

    return methods;
  })(),
  
  computed: Vuex.mapGetters('I18n', [
    'locale'
  ]),
  
  filters: {
    // 先頭を大文字化
    capitalize: function(s) { return s.charAt(0).toUpperCase() + s.slice(1); },
  }
});
})();
