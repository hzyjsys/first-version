'use strict';
jQuery(document).ready(function($) {
    // setTimeout(function(){
    //     $(".tip").css("display","none");
    // }, 2000);
    //首页轮播图
    $(".slidershow_paging a").html("");
    $('#slideshow_2').cycle({
        fx: 'fade',
        speed:  2000,
        timeout: 1000,
        pager: '#lunbo .slideshow_paging',
        prev: '#lunbo .prev',
        next: '#lunbo .next',
        before: function(currSlideElement, nextSlideElement) {
            var data = $('.data', $(nextSlideElement)).html();
            $('#lunbo .slideshow_box').stop(false, false).animate({ bottom:'-150px'}, 400, function(){
                $('#lunbo .slideshow_box .data').html(data);
            });
            $('#lunbo .slideshow_box').delay(100).animate({ bottom:'-10px'}, 400);
        }
    });
    $('#lunbo').mouseenter(function(){
        $('#slideshow_2').cycle('pause');
        $('#lunbo .prev').stop(true, true).animate({ left:'20px'}, 200);
        $('#lunbo .next').stop(true, true).animate({ right:'20px'}, 200);
    }).mouseleave(function(){
        $('#slideshow_2').cycle('resume');
        $('#lunbo .prev').stop(true, true).animate({ left:'-60px'}, 200);
        $('#lunbo .next').stop(true, true).animate({ right:'-60px'}, 200);
    });
    $('a[href="#"]').click(function(event){
        event.preventDefault();
    });
});