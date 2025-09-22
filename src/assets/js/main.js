(function($) {
  "use strict";
  
  AOS.init({
    disable: function() {
      var maxWidth = 1200;
      return window.innerWidth < maxWidth;
    }
  });
  
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 100) {
        //console.log('a');
        $("header").addClass("fixed-top");
        $("body").addClass("scroll");
    } else {
        //console.log('a');
        $("header").removeClass("fixed-top");
        $("body").removeClass("scroll");
    }
});




$('.topbooked-cases').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 6,
  focusOnSelect: true, 
  autoplay: true,
  dots: false,
  arrows: true,
  autoplaySpeed: 4000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 2, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, 
            }
        },
  ]
});


$('.popular-lists').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 4,
  focusOnSelect: true, 
  autoplay: true,
  dots: false,
  arrows: true,
  autoplaySpeed: 3000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 2, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, 
            }
        },
  ]
});


$('.testimonial-topics').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 1,
  focusOnSelect: true, 
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 1, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, 
            }
        },
  ]
});

$('.body-parts').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 7,
  focusOnSelect: true, 
  autoplay: true,
  dots: false,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 3, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2, 
            }
        },
  ]
});

$('.condition-lsts').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 6,
  focusOnSelect: true, 
  autoplay: true,
  dots: false,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 2, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, 
            }
        },
  ]
});

$('.lat-hapns').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 2,
  focusOnSelect: true, 
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2, 
            }
        },
        {
          breakpoint: 680,
          settings: {
              slidesToShow: 1, 
          }
      },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1, 
            }
        },
  ]
});


$('.counter').countUp({
    delay: 50,
    time: 4000
});
  
  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  $('#dateTime').datetimepicker({
    uiLibrary: 'bootstrap4',
    modal: true,
    footer: true,
});

    $("#dateTime").focus(function(){
      $(".date-time").addClass("onfocus");
   });


  
  // Back to top button
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 300) {
        //console.log('a');
        $(".back-to-top").addClass("scrollfixed");
    } else {
        //console.log('a');
        $(".back-to-top").removeClass("scrollfixed");
    }
});


$(window).scroll(function() {    
  $("#infrastructure").removeClass("bottom-fixed");
  var scroll = $(window).scrollTop();
   //console.log(scroll);
  if (scroll >= 350) {
      //console.log('a');
      $("#infrastructure").addClass("fixed");
  } else {
      //console.log('a');
      $("#infrastructure").removeClass("fixed");
  }
  if($(window).scrollTop() + $(window).height() > ($(document).height() - 500) ) {
      //you are at bottom
      $("#infrastructure").addClass("bottom-fixed");
  }
});


$('.collapse').on('shown.bs.collapse', function () {
  $(this).prev().addClass('active-acc');
});

$('.collapse').on('hidden.bs.collapse', function () {
  $(this).prev().removeClass('active-acc');
});

$('.collapse').on('shown.bs.collapse', function(e) {
var $card = $(this).closest('.card');
$('html,body').animate({
scrollTop: $card.offset().top -100
}, 500);
});


$("input[name='accordion']").click(function () {
  $("html, body").animate({
    scrollTop: $("#" + $(this).attr("id")).offset().top +400
  }, 1000)
})

  
$(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000,
    }) 
});



$('.toptests-slider').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 4,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 3000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
  ]
});

$('.health-packages').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 4,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 3000,
  responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
  ]
});


 $('.carousel').carousel();

 $('.testimonial-scroll').slick({
  slidesToScroll: 1,
  infinite:true,
  slidesToShow: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
});

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();		 
        if (scroll >= 900) {
          //console.log('a');
          $("#fxng").addClass("fixed");
        } else {
          //console.log('a');
          $("#fxng").removeClass("fixed");
      }
    });

    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();		 
        if (scroll >= 400) {
          //console.log('a');
          $("#cont").addClass("fixed");
        } else {
          //console.log('a');
          $("#cont").removeClass("fixed");
      }
    });

      $("#location").change(function(){
          $(this).find("option:selected").each(function(){
              var optionValue = $(this).attr("value");
              if(optionValue){
                  $(".address-box").not("." + optionValue).hide();
                  $("." + optionValue).show();
              } else{
                  $(".address-box").show();
              }
          });
      }).change();

    jQuery(function($) {
      if ($(window).width() > 991) {
        $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    
        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();    
        });    
        $('.navbar .dropdown > a').click(function() {
          location.href = this.href;
        });    
      }
    });

})(jQuery);