jQuery(function ($) {
    'use strict';
    // Home Slider
    $('.banner-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: false,
        nav:true,
    })
    $('.feedback-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        dots: true,
        nav:false,
        navText: ["<i class='fa-solid fa-angles-left'></i>", "<i class='fa-solid fa-angles-right'></i>"]
    })

    // Logo Slider
    $('.logo-slider').owlCarousel({
        loop:true,
        margin:30,
        dots: false,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })
   
}(jQuery));
$(document).ready(function(){

  $('.switcher-btn').click(function(){
        $('.theme-buttons-container').fadeToggle();
   });

   $('.switcher-btn').click(function(){
    $('.sel-text').fadeToggle();
});

   $('.theme-buttons').click(function(){
    $(":root ").css("--mainColor", "red")
  });
  $('.theme-button').click(function(){
    $(":root ").css("--mainColor", "#ffac1b")
  });
  $('.theme-buttom').click(function(){
    $(":root ").css("--mainColor", "#19bb0e")
  });
  $('.theme-color').click(function(){
    $(":root ").css("--mainColor", "#f05af5")
  });
  $('.theme-f-color').click(function(){
    $(":root ").css("--mainColor", "#00FF99")
  });
  $('.theme-font-color').click(function(){
    $(":root ").css("--mainColor", "#ff7100")
  });
  $('.theme-text-color').click(function(){
    $(":root ").css("--mainColor", "#468fd8")
  });
  $('.theme-txt-color').click(function(){
    $(":root ").css("--mainColor", "#B1ED7C")
  });

});