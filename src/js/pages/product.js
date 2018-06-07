
require.config(config);
define(['jquery', 'slides', 'Util', 'language', 'flexibility'], function ($, slides, util, lan, flexibility) {
  //多语言切换
  $(".switch-language > li").on("click", function () {
    var getLang = $(this).attr("lang");
    util.Store.saveObject("lang", getLang);
    window.location.reload();
  });
  //flex 兼容ie低版本浏览器
  flexibility(document.documentElement);
});