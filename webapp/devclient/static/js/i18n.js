/* i18n.js */

Vue.use(VueI18n);

this.I18n = (function() {
'user strict';
var I18n = {};

I18n.createI18n = function() {
  return new VueI18n({
    // 言語の初期値をセット
    locale: (browserLanguage() == 'ja') ? 'ja' : 'en',
    // 各言語ごとの文章一覧
    messages: {
      ja: {
        home: {
          about: 'クライアント側仮想通貨アドレス生成(JavaScript使用)',
          start_btn: 'ペーパーウォレットを作成',
          footer: 'JavaScriptのコピーライト情報はソースに含まれています。 保障はありません。'
        },
        generate: {
          sentence_1: '仮想通貨アドレスを生成中...',
          sentence_2: 'マウスを動かして、ランダム要素を追加してください。',
        },
        result: {
          wallet_list: 'ペーパーウォレット一覧',
          recalc_btn: '再計算',
          print_btn: '印刷',
        },
      },
      en: {
        home: {
          about: 'Client side virtual currency address generation (using JavaScript)',
          start_btn: 'Generate Paper Wallet',
          footer: 'JavaScript copywriting information is included in the source. There is no security.'
        },
        generate: {
          sentence_1: 'Generating virtual currency address...',
          sentence_2: 'Please move the mouse for add random elements.',
        },
        result: {
          wallet_list: 'Paper Wallet List',
          recalc_btn: 'Recalculation',
          print_btn: 'Print',
        },
      }
    },
  });
};

// private ---

// ブラウザの言語設定を取得
function browserLanguage() {
  var ua = window.navigator.userAgent.toLowerCase();
  try {
    // chrome
    if( ua.indexOf( 'chrome' ) != -1 ){
      return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
    // それ以外
    else{
      return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
  }
  catch( e ) {
    return undefined;
  }
};
//
return I18n;
})();
