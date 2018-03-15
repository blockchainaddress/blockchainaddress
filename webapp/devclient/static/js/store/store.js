/* store/store.js */

Vue.use(Vuex);

this.Store = (function() {
'use strict';
var Store = {};

var state = Mutations.state;
var mutations = Mutations.mutations;
var getters = Mutations.getters;

var createPlugins = Plugins.createPlugins;

Store.createStore = function(i18n) {
  // モジュール
  var i18nModule = {
    namespaced: true, // 名前空間を有効にする
    state: {
      i18n: i18n,
    },
    mutations: {
      // 言語設定を変更する
      setLocale: function(state, locale) {
        state.i18n.locale = locale;
      },
    },
    getters: {
      // 今の言語設定を取得する
      locale: function(state) {
        return state.i18n.locale;
      },
    }
  };

  return new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    modules: {
      I18n: i18nModule,
    },
    strict: debug,
    plugins: createPlugins(debug),
  });
};

var debug = false;
//
return Store;
})();
