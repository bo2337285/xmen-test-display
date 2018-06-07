require.config(config);
define(['jquery', 'slides', 'Util', 'language', 'flexibility'], function ($, slides, util, lan, flexibility) {
    debugger
    $(document).ready(function () {
        var mySwiper = new Swiper ('#swiper', {
            direction: 'vertical',
            loop: true,

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
    })
});
