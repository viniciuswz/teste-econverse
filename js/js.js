$(document).ready(function(){
    var elements = [...document.querySelectorAll('.showcase__item')];
    var element = elements[0];
    var content = $('.showcase__slide--content');
    var counter = 0;
    var total = elements.length;

    var next = $('#next');
    var prev = $('#prev');

    next.click(function(){
        slider('right');
    })

    prev.click(function(){
        slider('left');
    })

    function responsiveScroll(width){
        if(width >= 1025){
            return 4
        }
        if(width <= 1024 && width >= 769){
            return 3
        }
        if(width <= 768 && width >= 482){
            return 2
        }
        return 1
    }

    function slider(side){
        let widthScreen = $('body').width(); 
        let responsiveValue = responsiveScroll(widthScreen);
        if(side =='left'){
            counter = counter == 0 ? total - responsiveValue : --counter ;
        }else{
            counter = counter == total - responsiveValue ? 0 : ++counter;
        }
        let width = element.offsetWidth;
        let moveTo = width * counter;
        
        content.css('right',moveTo);
    }


    
    $('.menu__main--name').click(function(e){
        let element = $(this).parent().find('.submenu');
        if(element['length'] == 1){
            element.toggleClass('ativo');
        }
        $(this).toggleClass('menu__main--name-ativo');
    })

    $('.submenu__item--bold').click(function(e){
        let element = $(this).parent().find('.submenu__show');
        if(element['length'] == 1){
            element.toggleClass('submenu__show-ativo');
        }
    })

    $('.header__mobile--menu').click(function(){
        $('.header__content').toggleClass('ativo')
    })

    function scrollBanner() {
        let scrollPos;
        let menu = $('.header');
        let banner = $('.banner');
        let width = $(window).width();
        scrollPos = window.scrollY;
        console.log(scrollPos,banner.height())
        if (scrollPos  - menu.height() > banner.height()){
            if(width > 1024){
                menu.addClass('fixed');
            }
        }
        if (scrollPos  + menu.height() < banner.height()){
            if(width > 1024){
                menu.removeClass('fixed');
            }
        }
      }
      
      window.addEventListener('scroll', scrollBanner);
    
})