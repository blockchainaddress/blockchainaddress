/* components/result.js */

this.Result = Vue.extend({
  template: document.querySelector('template[id=tmpl-result]'),

  title: 'result',

  computed: Vuex.mapGetters([
    'addressWifs',
    'suffixes',
  ]),

  methods: (function() {
    var methods = Vuex.mapMutations([
      'calcAddressKey'
    ]);

    // アドレスの再計算
    methods.reCalcAddressKey = function() {
      SecureRandom.seedTime();
      this.$store.state.addressWifs = []; // clear
      this.calcAddressKey();

      var kvp = {};
      this.$store.state.addressWifs.forEach(function(elem) {
        kvp['qrcodeshare_' + elem.suffix] = elem.address;
        kvp['qrcodeprivate_' + elem.suffix] = elem.wif;
      });
      qrcodehelper.showQrCode(kvp);
    };

    return methods;
  })(),

  mounted: function() {
    var kvp = {};
    this.addressWifs.forEach(function(elem) {
      kvp['qrcodeshare_' + elem.suffix] = elem.address;
      kvp['qrcodeprivate_' + elem.suffix] = elem.wif;
    });

    qrcodehelper.showQrCode(kvp);
  },
});
