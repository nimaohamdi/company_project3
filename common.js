/**************************owl-carousel-testimonial*****************************/
$(document).ready(function () {
  $('#testimonial-owl').owlCarousel({
    nav: true,
    dots: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('#brands-owl').owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
});


//progressbar
$(document).ready(function () {
  $('.progress .progress-bar').css("width",
    function () {
      return $(this).attr("aria-valuenow") + "%";
    }
  )
});
/**************************menu-sticky*****************************/

// menuSticky
menuStickyJs();
$(document).on('scroll', function () {
  var menu_sticky = localStorage.getItem('menu-sticky') || 'true';
  if (menu_sticky == 'true') {
    menuStickyJs()
  } else {
    $('.header-sticky').removeClass('sticky');
  }
});

// menuStickyJs
function menuStickyJs() {
  var checkMenuSticky = $('body').attr('data-menu-sticky');
  if (checkMenuSticky == '1') {
    var startMenuStickyHeight = 50;
    var scrollHeight = $(document).scrollTop();
    if (document.body.clientWidth) {
      if (scrollHeight > startMenuStickyHeight) {
        $('.header-sticky').addClass('sticky');
      } else {
        $('.header-sticky').removeClass('sticky');
      }
    } else {
      $('.header-sticky').removeClass('sticky');
    }
  }
}


/***********************sidebar-search-account***********************/

// theme-rtl
$('.theme-rtl #slider').click(function () {
  var themeRtl = $('.theme-rtl .switch');
  if (themeRtl.hasClass('open')) {
    themeRtl.removeClass('open');
    $('body').removeClass('rtl')
    $('#themecontrol').removeClass('open');
  } else {
    themeRtl.addClass('open');
    $('body').addClass('rtl')
    $('#themecontrol').removeClass('open');
  }
});

$(document).ready(function () {

  // sidebar //
  $("#navbar-menu-btn").click(function () {
    $('#sidebar').addClass('open');
    $('body').addClass('open');
    $('#themecontrol').removeClass('open');

  });

  $("#slidebar-close-btn").click(function () {
    $('#sidebar').removeClass('open');
    $('body').removeClass('open');
  });

  // search //

  $(".search-header").click(function () {
    $('.search-outer-wrapper').addClass('open');
    $('body').addClass('serch-modal');
  });

  $(".search-close").click(function () {
    $('.search-outer-wrapper').removeClass('open');
    $('body').removeClass('serch-modal');
  });

  // account //

  $(".account-icon").click(function () {
    $('.login-register-wrapper').addClass('open');
    $('body').addClass('login-modal');
  });

  $(".login-close").click(function () {
    $('.login-register-wrapper').removeClass('open');
    $('body').removeClass('login-modal');
  });

});


/****************************scroll-to-top************************* */
if ($('#bottom-to-top').length) {
  var scrollTrigger = 100, // px
    bottomToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#bottom-to-top').addClass('show');
      } else {
        $('#bottom-to-top').removeClass('show');
      }
    };
  bottomToTop();
  $(window).on('scroll', function () {
    bottomToTop();
  });
  $('#bottom-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 100);
  });
}

// submenu //
$(document).ready(function () {
  $(".dropdown-link").click(function () {
    if ($('.sub-menu').hasClass('open')) {
      $('.sub-menu').removeClass('open');
    }
    else {
      $('.sub-menu').addClass('open');
    }
  });
});
/**************************menu-navbar-active*****************************/
$(document).ready(function () {
  $('#menu-navbar .nav-item-box').click(function () {
    $('li').removeClass("active");
    $(this).addClass("active");
    $('#sidebar').removeClass('open');
    $('.sub-menu').removeClass('open');
    $('body').removeClass('open');
  });
});
/***************************form_validation*********************************/

$("#bootstrapForm").submit(function (event) {

  // make selected form variable
  var vForm = $(this);

  /*
  If not valid prevent form submit
  */
  if (vForm[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  } else {

    // Replace alert with ajax submit here...
    alert("your form is valid and ready to send");

  }

  // Add bootstrap 4 was-validated classes to trigger validation messages
  vForm.addClass('was-validated');


});


// email validation

$(function () {

  var regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  $('[type="email"]').on('keyup', function () {
    $('.message').hide();
    regExp.test($(this).val()) ? $('.message.success').show() : $('.message.error').show();
  });

});

// loader
$(window).load(function () {
  $(".loader").fadeOut(1500);
});

// footer-toggle //
$('.footer-content-wrapper .footer-link-title').on('click', function (e) {
  if (document.body.clientWidth > 991) {
    e.stopPropagation()
  }
});