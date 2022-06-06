$(document).ready(function(){
    //open menu canvas
    $(".js-open-canvas").click(function(){
        $(".canvas-menu").addClass("open");
    })

    //close canvas menu
    $(".js-close-canvas").click(function(){
        $(".canvas-menu").removeClass("open");
    })

    // home slider carousel
    $('.slider-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        dots: false,
        navText: [`<svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.929688 18.9L4.02969 22L19.9297 6.1L35.8297 22L38.9297 18.9L19.9297 2.49155e-06L0.929688 18.9Z" fill="#FDFDFD"/>
        </svg>
        `, 
        `<svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.9297 3.1L35.8297 -6.77527e-07L19.9297 15.9L4.02969 -7.62764e-06L0.929687 3.09999L19.9297 22L38.9297 3.1Z" fill="#FDFDFD"/>
        </svg>
        `],
        responsive:{
            0:{
                items:1
            }
        }
    });

    // office tcom 
    $('.r-featured-news .news-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Next" type="button"><img src="images/home/icon-next.svg"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="images/home/icon-next.svg"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            }
          },
         
        ]
    });

    // home featured news slider
    $('.r-office-tcom .tcom-image').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Next" type="button"><img src="images/home/icon-next.svg"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="images/home/icon-next.svg"></button>',
    });

    // jobs carousel
    $('.jobs-carousel').owlCarousel({
        loop: false,
        margin: 50,
        // autoWidth:true,
        nav: true,
        dots: false,
        navText: [`<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_400_1146)">
        <path d="M20.4414 40.1411C31.4869 40.1411 40.4414 31.1866 40.4414 20.1411C40.4414 9.09565 31.4869 0.141116 20.4414 0.141115C9.39594 0.141114 0.441413 9.09564 0.441412 20.1411C0.441411 31.1866 9.39594 40.1411 20.4414 40.1411ZM20.4414 3.47447C29.6459 3.47447 37.108 10.9366 37.108 20.1411C37.108 29.3456 29.6459 36.8078 20.4414 36.8078C11.2369 36.8078 3.77477 29.3456 3.77477 20.1411C3.77477 10.9366 11.2369 3.47447 20.4414 3.47447Z" fill="white"/>
        <path d="M22.5962 29.653C23.2471 30.3038 24.3024 30.3038 24.9533 29.653C25.6041 29.0021 25.6041 27.9468 24.9533 27.2959L17.7984 20.1411L24.9533 12.9863C25.6041 12.3354 25.6041 11.2801 24.9533 10.6292C24.3024 9.97836 23.2471 9.97836 22.5962 10.6292L14.2629 18.9626C13.612 19.6134 13.612 20.6688 14.2629 21.3196L22.5962 29.653Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_400_1146">
        <rect width="40" height="40" fill="white" transform="translate(40.4414 40.1411) rotate(-180)"/>
        </clipPath>
        </defs>
        </svg>        
        `, 
        `<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_400_1139)">
        <path d="M20.4414 0.141117C9.39594 0.141115 0.441405 9.09564 0.441403 20.1411C0.441401 31.1866 9.39593 40.1411 20.4414 40.1411C31.4869 40.1411 40.4414 31.1866 40.4414 20.1411C40.4414 9.09565 31.4869 0.141119 20.4414 0.141117ZM20.4414 36.8078C11.2369 36.8078 3.77476 29.3456 3.77476 20.1411C3.77476 10.9366 11.2369 3.47447 20.4414 3.47448C29.6459 3.47448 37.108 10.9366 37.108 20.1411C37.108 29.3456 29.6459 36.8078 20.4414 36.8078Z" fill="white"/>
        <path d="M18.2866 10.6293C17.6357 9.9784 16.5804 9.9784 15.9296 10.6293C15.2787 11.2801 15.2787 12.3354 15.9296 12.9863L23.0844 20.1411L15.9295 27.296C15.2787 27.9468 15.2787 29.0021 15.9295 29.653C16.5804 30.3039 17.6357 30.3039 18.2866 29.653L26.6199 21.3196C27.2708 20.6688 27.2708 19.6135 26.6199 18.9626L18.2866 10.6293Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_400_1139">
        <rect width="40" height="40" fill="white" transform="translate(0.441406 0.141113)"/>
        </clipPath>
        </defs>
        </svg>        
        `],
        responsive:{
            0:{
                items:2
            },
            1200:{
                items:3,
                margin: 120,
            }
        }
    });

    // step carousel
    $('.step-carousel').owlCarousel({
        loop: false,
        margin: 32,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    

    // jobs carousel
    if($('.feedback-carousel').length){
        $('.feedback-carousel').owlCarousel({
            loop: false,
            margin: 0,
            autoplay: true,
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items:1
                }
            }
        });
    }

    // treasure carousel
    $('.treasure-carousel').owlCarousel({
        loop: false,
        margin: 46,
        nav: true,
        
        dots: false,
        onInitialized  : counter, 
        onTranslated : counter,
        navText: [`<svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 7.21774C21 7.41666 20.921 7.60742 20.7803 7.74807C20.6397 7.88873 20.4489 7.96774 20.25 7.96774L2.5605 7.96774L7.281 12.6867C7.42183 12.8276 7.50095 13.0186 7.50095 13.2177C7.50095 13.4169 7.42183 13.6079 7.281 13.7487C7.14017 13.8896 6.94916 13.9687 6.75 13.9687C6.55084 13.9687 6.35983 13.8896 6.219 13.7487L0.218999 7.74874C0.149154 7.67907 0.0937398 7.59631 0.0559304 7.50519C0.018121 7.41407 -0.00134155 7.31639 -0.00134154 7.21774C-0.00134153 7.11909 0.0181211 7.02141 0.0559304 6.93029C0.0937398 6.83917 0.149154 6.75641 0.218999 6.68674L6.219 0.686743C6.35983 0.545913 6.55084 0.466795 6.75 0.466795C6.94916 0.466795 7.14017 0.545913 7.281 0.686743C7.42183 0.827573 7.50095 1.01858 7.50095 1.21774C7.50095 1.41691 7.42183 1.60791 7.281 1.74874L2.5605 6.46774L20.25 6.46774C20.4489 6.46774 20.6397 6.54676 20.7803 6.68741C20.921 6.82807 21 7.01883 21 7.21774Z" fill="#0063AA"/>
                </svg>
            `, 
            `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05042e-08 7.71585C8.28762e-08 7.51694 0.0790177 7.32617 0.21967 7.18552C0.360322 7.04487 0.551088 6.96585 0.75 6.96585L18.4395 6.96585L13.719 2.24685C13.5782 2.10602 13.4991 1.91501 13.4991 1.71585C13.4991 1.51669 13.5782 1.32568 13.719 1.18485C13.8598 1.04402 14.0508 0.964903 14.25 0.964903C14.4492 0.964903 14.6402 1.04402 14.781 1.18485L20.781 7.18485C20.8508 7.25452 20.9063 7.33728 20.9441 7.4284C20.9819 7.51952 21.0013 7.6172 21.0013 7.71585C21.0013 7.8145 20.9819 7.91218 20.9441 8.0033C20.9063 8.09442 20.8508 8.17718 20.781 8.24685L14.781 14.2468C14.6402 14.3877 14.4492 14.4668 14.25 14.4668C14.0508 14.4668 13.8598 14.3877 13.719 14.2468C13.5782 14.106 13.4991 13.915 13.4991 13.7158C13.4991 13.5167 13.5782 13.3257 13.719 13.1848L18.4395 8.46585L0.75 8.46585C0.551088 8.46585 0.360322 8.38683 0.21967 8.24618C0.0790177 8.10553 7.81322e-08 7.91476 8.05042e-08 7.71585Z" fill="#0063AA"/>
            </svg>                
        `],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                autoWidth:true,
            }
        }
    });
    

    // featured project carousel
    $('.featured-project-carousel').owlCarousel({
        loop: false,
        margin: 50,
        nav: true,
        dots: false,
        onInitialized  : counter, 
        onTranslated : counter, 
        navText: [`<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_400_758)">
        <path d="M16.4414 0.14014C25.2778 0.140138 32.4414 7.30376 32.4414 16.1401C32.4414 24.9765 25.2778 32.1401 16.4414 32.1401C7.60504 32.1401 0.441412 24.9765 0.441411 16.1401C0.441409 7.30377 7.60503 0.140141 16.4414 0.14014ZM16.4414 29.4735C23.805 29.4734 29.7747 23.5038 29.7747 16.1401C29.7747 8.77651 23.805 2.80683 16.4414 2.80683C9.07778 2.80683 3.1081 8.77652 3.1081 16.1401C3.1081 23.5038 9.07779 29.4735 16.4414 29.4735Z" fill="#0063AA"/>
        <path d="M18.1653 8.53065C18.686 8.00997 19.5302 8.00996 20.0509 8.53065C20.5716 9.05134 20.5716 9.89559 20.0509 10.4163L14.327 16.1402L20.0509 21.864C20.5716 22.3847 20.5716 23.229 20.0509 23.7497C19.5302 24.2703 18.686 24.2703 18.1653 23.7497L11.4986 17.083C10.9779 16.5623 10.9779 15.718 11.4986 15.1973L18.1653 8.53065Z" fill="#0063AA"/>
        </g>
        <defs>
        <clipPath id="clip0_400_758">
        <rect width="32" height="32" fill="white" transform="matrix(-1 1.74846e-07 1.74846e-07 1 32.4414 0.140137)"/>
        </clipPath>
        </defs>
        </svg>        
        `, 
        `<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_400_751)">
        <path d="M16.4414 0.14014C7.60503 0.140138 0.441405 7.30376 0.441403 16.1401C0.441402 24.9765 7.60502 32.1401 16.4414 32.1401C25.2778 32.1401 32.4414 24.9765 32.4414 16.1401C32.4414 7.30377 25.2778 0.140141 16.4414 0.14014ZM16.4414 29.4735C9.07778 29.4734 3.10809 23.5038 3.10809 16.1401C3.10809 8.77651 9.07778 2.80683 16.4414 2.80683C23.805 2.80683 29.7747 8.77652 29.7747 16.1401C29.7747 23.5038 23.805 29.4735 16.4414 29.4735Z" fill="#0063AA"/>
        <path d="M14.7175 8.53065C14.1969 8.00997 13.3526 8.00996 12.8319 8.53065C12.3112 9.05134 12.3112 9.89559 12.8319 10.4163L18.5558 16.1402L12.8319 21.864C12.3112 22.3847 12.3112 23.229 12.8319 23.7497C13.3526 24.2703 14.1969 24.2703 14.7175 23.7497L21.3842 17.083C21.9049 16.5623 21.9049 15.718 21.3842 15.1973L14.7175 8.53065Z" fill="#0063AA"/>
        </g>
        <defs>
        <clipPath id="clip0_400_751">
        <rect width="32" height="32" fill="white" transform="translate(0.441406 0.140137)"/>
        </clipPath>
        </defs>
        </svg>
        `],
        responsive:{
            0:{
                items:1
            }
        }
    })

    //counter featured project carousel
    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index + 1;     // Position of the current item
       
        // it loop is true then reset counter from 1
        if(item > items) {
            item = item - items
        }
        var preItem ="";
        if(item < 10){
            preItem = "0"
        }
        else{
            preItem = ""
        }
        $('.r-treasure-slider #counter').html("<span class='current'>" + preItem + item + "</span>")
        $('#home #counter').html("<span class='current'>" + item + "</span>" + " <span class='separate'></span> " + "<span class='total'>" + items + "</span>")
    }

    //progress slider
    if($('#about .block-progress').length){
        $('#about .block-progress').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            loop: false,
            // vertical: true,
            // verticalSwiping: true
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        vertical: true,
                        verticalSwiping: true
                    }
                }
              ]
        });
    }
    


    $("#service .sidebar ul li a").click(function(){
        $("#service .sidebar ul li").removeClass("active")
        $(this).parent().addClass("active")
    })

   

    $(window).scroll(function(){
        var a = $("#footer").offset().top;
        var b = $(window).scrollTop();
        if(b > (a - 800)){
            $("#service .sidebar").addClass("off-fixed")
        }
        else{
            $("#service .sidebar").removeClass("off-fixed")
        }
    });

    $("#service .js-open-sidebar").click(function(e){
        e.preventDefault()
        $("#service .js-open-sidebar + .box").toggle()
    })

    anchorLink(".r-big-banner .scroll-link")
    // anchorLink("#service .sidebar ul li a")

    changeTextDots()
    scrollActiveSidebar()
});

$(window).resize(function(){
    changeTextDots()
    scrollActiveSidebar()
});

// anchor link in page
function anchorLink(element){
	$(element).click(function() {
		var idSection = $(this).attr("href");
        $('html, body').animate({
          	scrollTop: $(`${idSection}`).offset().top - 30
        }, 1000)
    });
    // scrollActiveSidebar().disable()
}

function changeTextDots(){
    //change text dots progress slider
    $('.r-progress #slick-slide-control10').text("2022")
    $('.r-progress #slick-slide-control11').text("2021")
    $('.r-progress #slick-slide-control12').text("2020")
    $('.r-progress #slick-slide-control13').text("2019")
    $('.r-progress #slick-slide-control14').text("2018")
    $('.r-progress #slick-slide-control15').text("2017")
    $('.r-progress #slick-slide-control16').text("2012")
}

function scrollActiveSidebar(){
    //active nav sibar when scroll
    var sections = $('.r-service-box .box')
    , nav = $('#header')
    , sidebar = $(".sidebar")
    , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    
    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        
        if (cur_pos >= top && cur_pos <= bottom) {
        sidebar.find('a').removeClass('active');
        sections.removeClass('active');
        
        $(this).addClass('active');
        sidebar.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
    });

    sidebar.find('a').on('click', function () {
        var $el = $(this)
          , id = $el.attr('href');
        
        $('html, body').animate({
          scrollTop: $(id).offset().top - nav_height
        }, 500);
        
        return false;
    });
}
