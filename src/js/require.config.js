

var config = {
  baseUrl: '../js/',
  paths: {
    jquery: 'plugin/jquery-1.9.1.min',
    slides: 'plugin/jquery.slides',
    // swiper	 : 'plugin/swiper.min',
    Util: 'common/Util',
    language: 'common/language',
    flexibility: 'plugin/flexibility'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    slides: {
      deps: ['jquery']
    },
    language: {
      deps: ['jquery', 'Util']
    }
  }
};