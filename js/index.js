$(document).ready(function(){
    $('header button').click(function(){
        $('header').toggleClass('active');
        $('header button').toggleClass('active');
        $('header nav').toggleClass('active02');
        $('header > a').toggleClass('active');
        $('header nav > div > ul').removeClass('active');
        $('header nav > ul li span').removeClass('active');
        if($('header > button').hasClass('active') == true ){
            $('header').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
        }else{
            $('header').off('scroll touchmove mousewheel');
        }
        $('header nav > ul li').click(function(e){
            e.preventDefault();
            $('header nav > ul li span').removeClass('active');
            $('header nav > ul li span').eq($(this).index()).toggleClass('active');
            $('header nav > div > ul').removeClass('active');
            $('header nav > div > ul').eq($(this).index()).toggleClass('active');
        })
    });
    $(window).scroll(function(){
        if($('header').offset().top > 550){
            $('header nav').addClass('active');
        }
        else{
            $('header nav').removeClass('active');
        }
    });
    $('header nav ul').hover(function(){
        if($('header').offset().top < 550){
            $('header nav').toggleClass('active');
            $('header nav > div').toggleClass('active');
        }else{
        $(this).addClass('active');
        $('header nav > div').toggleClass('active');
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > (($('body').prop('scrollHeight') / 2))){
            $('footer span').addClass('active');
        }
        else{
            $('footer span').removeClass('active');
        }
    });
    $('footer span').click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	    return false;
    })
    $('.street_hanbok > ul li').click(function(){
        $('.street_hanbok > ul li').removeClass('active');
        $(this).addClass('active');
        $('.street_hanbok > div').removeClass('active');
        $('.street_hanbok > div').eq($(this).index()).addClass('active');
    });
    $('.bus_subway > ul li').click(function(){
        $('.bus_subway > ul li').removeClass('active');
        $(this).addClass('active');
        $('.bus_subway > div').removeClass('active');
        $('.bus_subway > div').eq($(this).index()).addClass('active');
    });
    $('.bus_subway > ul li button').click(function(){
        $('.bus_subway > ul li button').removeClass('active');
        $(this).addClass('active');
    });
    if($('section').hasClass('list_content') == true){
            $(window).scroll(function(){
            if($(window).scrollTop() > $('.list_content').offset().top){
                $('.list_content ul li').addClass('active');
            }
        });
    }else if(($('section').hasClass('hanbok_list_content') == true)){
        $(window).scroll(function(){
            if($(window).scrollTop() > $('.hanbok_list_content').offset().top){
                $('.hanbok_list_content ul li').addClass('active');
            }
        });
    }
    $('.FAQ > div:nth-of-type(1) button').click(function(){
        $('.FAQ > div:nth-of-type(1) button').removeClass('active');
        $(this).addClass('active');
        $('.FAQ > ul').removeClass('active');
        $('.FAQ > ul').eq($(this).index()).addClass('active');
    });
    $('.FAQ > ul li').click(function(){
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    $(window).load(function(){
        if($('ul').hasClass('bxslider') == true){
            var slider = $('.bxslider').bxSlider({
                mode:'horizontal',
                auto: true,
                speed:600,
                autoControls: false,
                stopAutoOnClick: false,
                pager: false,
                startSilde: 1,
                autoControlsCombine: false,
                controls: false,
                infiniteLoop:true,
                responsive: true,
                autostart: true,
                autoHover: false,
                touchEnabled:false,
                shrinkitems: true,
                responsive: true
              });
        }
        $('aside > ul > li:nth-of-type(1) a').click(function(){
            slider.goToSlide(0);
        });
        $('aside > ul > li:nth-of-type(2) a').click(function(){
            slider.goToSlide(1);
        });
        $('aside > ul > li:nth-of-type(3) a').click(function(){
            slider.goToSlide(2);
        });    
        $('aside > ul > li:nth-of-type(4) a').click(function(){
            slider.goToSlide(3);
        });    
});
});
