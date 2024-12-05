jQuery(document).ready(function($){
    const swiper = new Swiper('.swiper.swiper-banner', {
        direction: 'horizontal',
        // loop: true,
        effect: "fade",
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
});