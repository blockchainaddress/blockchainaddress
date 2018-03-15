/* components/generate.js */

var Generate = Vue.extend({
  template: document.querySelector('template[id=tmpl-generate]'),

  title: 'generate',

  data: function() {
    return {
      lastInputTime: 0,
    };
  },

  created: function() {
    window.addEventListener('mousemove', this.onMove);
  },

  destroyed: function() {
    window.removeEventListener('mousemove', this.onMove);
  },

  computed: Vuex.mapGetters([
    'remain',
    'seedPoints',
    'addressWifs',
  ]),

  methods: (function() {
    var methods = Vuex.mapMutations([
      'addSeedPoint',
      'calcAddressKey'
    ]);

    methods.onMove = function(ev) {
      if (this.remain <= 0) return;

      var timeStamp = new Date().getTime();
      if (timeStamp - this.lastInputTime <= 20) return;

      this.lastInputTime = timeStamp;

      SecureRandom.seedTime();
      SecureRandom.seedInt16((ev.clientX * ev.clientY));

      this.$store.state.remain--;
      this.addSeedPoint({
        x: ev.clientX,
        y: ev.clientY,
      });
      
      if (this.$store.state.remain == 0) {
        this.calcAddressKey();
        this.$router.push({ name: 'result' });
      }
    };
    
    return methods;
  })(),
});
