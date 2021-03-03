
jQuery(document).ready(function ($) {

  /* preloader  */
  $('.preloader').fadeOut('slow');
  $('body').css('overflow', 'auto');

  /* main page sub-menu */
  $('.sub-menu__btn').click(function (e) {
    $('.sub-menu__btn span').toggleClass('burger');
    $('.sub-menu li').toggleClass('visible');
    $('.sub-menu').toggleClass('sub-menu-bg');
  });

  /* main page mobile-menu */
  $('.mobile-menu__btn').click(function (e) {
    $('.mobile-menu__btn span').toggleClass('burger');
    $('.mobile-menu li').toggleClass('visible');
    $('.mobile-menu').toggleClass('mobile-menu-bg');
  });

  /* slider*/
  $('.slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: '<div class="slick-arrow"><span>&#10140;</span></div>',
    prevArrow: '<div class="slick-arrow"><span>&#10140;</span></div>',
  });

  /* modal */
  $('.callback-btn').click(function () {
    $('.modal-wrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.calc-button').click(function () {
    $('.modal-wrapper-calc').css('display', 'flex');
    $('.calc-wrapper').css('display', 'none');    
    $('body').css('overflow', 'hidden');
  });

  $('.expert-btn').click(function () {
    $('.modal-wrapper-expert').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.pres-btn').click(function () {
    $('.modal-wrapper-pres').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.home-calc, .home-calc-mob').click(function (e) {
    $('.calc-wrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.home-callback, .home-callback-mob').click(function (e) {
    $('.modal-wrapper-home').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.close').click(function () {
    $('.modal-wrapper').css('display', 'none');
    $('.modal-wrapper-expert').css('display', 'none');
    $('.modal-wrapper-pres').css('display', 'none');
    $('.modal-wrapper-calc').css('display', 'none');
    $('.modal-wrapper-home').css('display', 'none');
    $('.banner-wrapper').css('display', 'none');
    $('.calc-wrapper').css('display', 'none');
    $('body').css('overflow', 'auto');
  });

  $(document).keyup(function (e) {
    if (e.which == 27) {
      $('.modal-wrapper').css('display', 'none');
      $('.modal-wrapper-expert').css('display', 'none');
      $('.modal-wrapper-pres').css('display', 'none');
      $('.modal-wrapper-calc').css('display', 'none');
      $('.modal-wrapper-home').css('display', 'none');
      $('.banner-wrapper').css('display', 'none');
      $('.calc-wrapper').css('display', 'none');
      $('body').css('overflow', 'auto');
    }
  });

  /* callback phone */
  $('#phone, .calc-input').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  /* wow */
  let wow = new WOW({
    offset: 50
  });
  wow.init();

  /* aos */
  AOS.init({
    disable: 'mobile',
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 80,
    delay: 0,
    duration: 400,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    anchorPlacement: 'right',
  });

  /* relax */
  let rellax = new Rellax('.rellax, .parallax', {
    speed: 0.2,
  });

  /* steps */
  if (window.screen.width <= 480) {
    $('.steps__arrow').removeClass('arrow-horisontal');
    $('.steps__arrow').addClass('arrow-vertical');
  }

  /* team */
  $('.team__mobile-tab').click(function () {
    $('.team').css('height', 'auto');
    $('.team').css('overflow', 'visible');
    $('.member:nth-child(n+5)').css('opacity', '1');
    $('.member:nth-child(n+3)').css('opacity', '1');
    $('.team__mobile-tab').css('display', 'none');
    $('.footer').css('margin-top', '0');
  });

  /* history  .history__img img:nth-of-type(5)*/
  $('.history__mobile-tab').click(function () {
    $('.history__table :nth-child(n+7)').css('display', 'table-row');
    $('.history__img').css('display', 'flex');
    $('.history__img:last-of-type').css('opacity', 'block');
    $('.history__mobile-tab').css('display', 'none');
  });

  /* about button */
  $('.about__btn-mob').click(function () {
    $('.about__btn-mob').css('display', 'none');
    $('.about__text-mob').css('display', 'block');
  })

  /* to-top */
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  /* main page active navbar */
  let link = $('#navbar a.main-menu__link');

  link.on('click', function (e) {
    let target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    $(this).addClass('active');
    e.preventDefault();
  });

  $(window).on('scroll', function () {
    scrNav();
  });

  function scrNav() {
    let sTop = $(window).scrollTop();
    $('section').each(function () {
      let id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
    $('footer').each(function () {
      let id = $(this).attr('id'),
        offset = $(this).offset().top - 1,
        height = $(this).height();
      if (sTop >= offset && sTop < offset + height) {
        link.removeClass('active');
        $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
    });
  }
  scrNav();

  /* home-calc */
  let usd_1k = [
    [6,  12.00,  '',   '',    '',    13.00],
    [9,  13.00, 14.00, '',    '',    15.00],
    [12, 14.00, 14.50, 15.00, '',    16.00],
    [18, 15.00, 15.50, 16.00, '',    17.00],
    [24, 16.00, 16.00, 16.50, 17.00, 18.00],
  ];
  let usd_20k = [
    [6,  13.00, '',     '',   '',    14.00],
    [9,  14.00, '',     '',   '',    15.00],
    [12, 15.00, 16.00, 17.00, '',    18.00],
    [18, 15.50, 16.50, 17.50, '',    18.50],
    [24, 16.50, 17.00, 17.50, 18.00, 19.00],
  ];
  let usd_50k = [
    [6,  14.00, '',    '',    '',    15.00],
    [9,  15.00, 15.50, '',    '',    16.00],
    [12, 16.00, 16.50, 17.00, '',    17.50],
    [18, 16.50, 17.00, 17.50, '',    18.00],
    [24, 17.50, 17.50, 18.00, 19.00, 20.00],
  ];

  let uah_25k = [
    [6,  20.00, '',    '',    '',    20.00],
    [9,  20.50, 20.75, '',    '',    21.00],
    [12, 21.00, 21.25, 21.50, '',    21.75],
    [18, 21.50, 21.75, 22.00, '',    22.50],
    [24, 22.00, 22.25, 22.50, 22.75, 23.00],
  ];
  let uah_200k = [
    [6,  20.50, '',    '',    '', 21.00],
    [9,  21.00, 21.50, '',    '', 22.00],
    [12, 21.50, 22.00, 22.50, '', 23.00],
    [18, 22.00, 22.50, 23.00, '', 23.50],
    [24, 22.50, 23.00, 23.50, '', 24.00],
  ];
  let uah_500k = [
    [6,  21.00, '',    '',    '',    17.00],
    [9,  21.50, 21.75, 21.75, '',    22.25],
    [12, 22.00, 25.25, 22.25, 22.50, 23.25],
    [18, 22.50, 23.00, 23.00, 23.50, 23.75],
    [24, 23.00, 23.50, 23.50, 24.00, 25.00],
  ];

  function calc() { 
    let month_pay = $('.month_pay');
    let quarterly_pay = $('.quarterly_pay');
    let half_year_pay = $('.half_year_pay');
    let year_pay = $('.year_pay');
    let end_pay = $('.end_pay');

    let curr = $('input[name="calc-curr"]:checked').val();
    let input = $('#calc-input').val();
    let month = $('#calc-month').val();
    let payment = $('#payment').val();
    let perc;
    let output;
  
    if (curr == 'usd') {
      if (input < 1000 ){
        output = ' < 1000'
      } else if (input >= 1000 && input < 20000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_1k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = usd_1k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = usd_1k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = usd_1k[0][1];
          } else if (payment == 'end_pay') {
            perc = usd_1k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_1k[1][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_1k[1][2];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('quarterly_pay');
            perc = usd_1k[1][2];
          } else if (payment == 'year_pay') {
            $('#payment').val('quarterly_pay');
            perc = usd_1k[1][2];
          } else if (payment == 'end_pay') {
            perc = usd_1k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_1k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_1k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_1k[2][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_1k[2][3];
          } else if (payment == 'end_pay') {
            perc = usd_1k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_1k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_1k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_1k[3][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_1k[3][3];
          } else if (payment == 'end_pay') {
            perc = usd_1k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = usd_1k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_1k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_1k[4][3];
          } else if (payment == 'year_pay') {
            perc = usd_1k[4][4];
          } else if (payment == 'end_pay') {
            perc = usd_1k[4][5];
          }
        }
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      } else if (input >= 20000 && input < 50000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_20k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[0][1];
          } else if (payment == 'end_pay') {
            perc = usd_20k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_20k[1][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[1][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[1][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = usd_20k[1][1];
          } else if (payment == 'end_pay') {
            perc = usd_20k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_20k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_20k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_20k[2][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_20k[2][3];
          } else if (payment == 'end_pay') {
            perc = usd_20k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_20k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_20k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_20k[3][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_20k[3][3];
          } else if (payment == 'end_pay') {
            perc = usd_20k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = usd_20k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_20k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_20k[4][3];
          } else if (payment == 'year_pay') {
            perc = usd_20k[4][4];
          } else if (payment == 'end_pay') {
            perc = usd_20k[4][5];
          }
        }
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      } else if (input >= 50000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_50k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = usd_50k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = usd_50k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = usd_50k[0][1];
          } else if (payment == 'end_pay') {
            perc = usd_50k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_50k[1][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_50k[1][2];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('quarterly_pay');
            perc = usd_50k[1][2];
          } else if (payment == 'year_pay') {
            $('#payment').val('quarterly_pay');
            perc = usd_50k[1][2];
          } else if (payment == 'end_pay') {
            perc = usd_50k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_50k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_50k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_50k[2][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_50k[2][3];
          } else if (payment == 'end_pay') {
            perc = usd_50k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = usd_50k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_50k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_50k[3][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = usd_50k[3][3];
          } else if (payment == 'end_pay') {
            perc = usd_50k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = usd_50k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = usd_50k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = usd_50k[4][3];
          } else if (payment == 'year_pay') {
            perc = usd_50k[4][4];
          } else if (payment == 'end_pay') {
            perc = usd_50k[4][5];
          }
        }
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      }     
    } else if (curr == 'uah') {
      if (input < 25000 ){
        output = ' < 25000'
      } else if (input >= 25000 && input < 200000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_25k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = uah_25k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = uah_25k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = uah_25k[0][1];
          } else if (payment == 'end_pay') {
            perc = uah_25k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_25k[1][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_25k[1][2];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('quarterly_pay');
            perc = uah_25k[1][2];
          } else if (payment == 'year_pay') {
            $('#payment').val('quarterly_pay');
            perc = uah_25k[1][2];
          } else if (payment == 'end_pay') {
            perc = uah_25k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_25k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_25k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_25k[2][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_25k[2][3];
          } else if (payment == 'end_pay') {
            perc = uah_25k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_25k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_25k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_25k[3][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_25k[3][3];
          } else if (payment == 'end_pay') {
            perc = uah_25k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = uah_25k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_25k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_25k[4][3];
          } else if (payment == 'year_pay') {
            perc = uah_25k[4][4];
          } else if (payment == 'end_pay') {
            perc = uah_25k[4][5];
          }
        }
        $('#curr').html('&#8372;&ensp;')
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      } else if (input >= 200000 && input < 500000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_200k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = uah_200k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = uah_200k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = uah_200k[0][1];
          } else if (payment == 'end_pay') {
            perc = uah_200k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_200k[1][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_200k[1][2];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('quarterly_pay');
            perc = uah_200k[1][2];
          } else if (payment == 'year_pay') {
            $('#payment').val('quarterly_pay');
            perc = uah_200k[1][2];
          } else if (payment == 'end_pay') {
            perc = uah_200k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_200k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_200k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_200k[2][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_200k[2][3];
          } else if (payment == 'end_pay') {
            perc = uah_200k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_200k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_200k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_200k[3][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_200k[3][3];
          } else if (payment == 'end_pay') {
            perc = uah_200k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_200k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_200k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_200k[4][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_200k[4][3];
          } else if (payment == 'end_pay') {
            perc = uah_200k[4][5];
          }
        }
        $('#curr').html('&#8372;&ensp;')
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      } else if (input >= 500000 && input < 1000000) {
        if (month >= 6 && month < 9) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'none');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_500k[0][1];
          } else if (payment == 'quarterly_pay') {
            $('#payment').val('month_pay');
            perc = uah_500k[0][1];
          } else if (payment == 'half_year_pay') {
            $('#payment').val('month_pay');
            perc = uah_500k[0][1];
          } else if (payment == 'year_pay') {
            $('#payment').val('month_pay');
            perc = uah_500k[0][1];
          } else if (payment == 'end_pay') {
            perc = uah_500k[0][5];
          }
        } else if (month >= 9 && month < 12) {
          quarterly_pay.css('display', 'none');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'none');
          if (payment == 'month_pay') {
            perc = uah_500k[1][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_500k[1][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_500k[1][3];
          } else if (payment == 'year_pay') {
            $('#payment').val('half_year_pay');
            perc = uah_500k[1][3];
          } else if (payment == 'end_pay') {
            perc = uah_500k[1][5];
          }
        } else if (month >= 12 && month < 18) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = uah_500k[2][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_500k[2][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_500k[2][3];
          } else if (payment == 'year_pay') {
            perc = uah_500k[2][4];
          } else if (payment == 'end_pay') {
            perc = uah_500k[2][5];
          }
        } else if (month >= 18 && month < 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = uah_500k[3][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_500k[3][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_500k[3][3];
          } else if (payment == 'year_pay') {
            perc = uah_500k[3][4];
          } else if (payment == 'end_pay') {
            perc = uah_500k[3][5];
          }
        } else if (month == 24) {
          quarterly_pay.css('display', 'block');
          half_year_pay.css('display', 'block');
          year_pay.css('display', 'block');
          if (payment == 'month_pay') {
            perc = uah_500k[4][1];
          } else if (payment == 'quarterly_pay') {
            perc = uah_500k[4][2];
          } else if (payment == 'half_year_pay') {
            perc = uah_500k[4][3];
          } else if (payment == 'year_pay') {
            perc = uah_500k[4][4];
          } else if (payment == 'end_pay') {
            perc = uah_500k[4][5];
          }
        }
        $('#curr').html('&#8372;&ensp;')
        output = (input * (perc / 100) / 12 * month).toFixed(2);
      } else if (input >= 1000000) {        
        $('#curr').html($('.individual_pay').html());
        output = '';
      }
    }
    
    $('#calc-output').html(output);
  };

  $('#calc-input').on('input', function () {

    calc();
  });

  $('#calc-month').on('input', function () {
    $('#month-value').html($(this).val());
    $('#month-value').css('left', ($(this).val() - 6) * 5.1 + '%');

    if (window.screen.width <= 410) {
      $('#month-value').css('left', ($(this).val() - 6) * 5 + '%');
    }

    if (window.screen.width <= 350) {
      $('#month-value').css('left', ($(this).val() - 6) * 4.85 + '%');
    }

    calc();
  });

  $('#payment').on('input', function () {
    calc();
  });

  $('input[name="calc-curr"]').click(function () {
    if ($('input[name="calc-curr"]:checked').val() == 'usd') {
      $('#curr').html('&#36;&ensp;');
    } else if ($('input[name="calc-curr"]:checked').val() == 'uah') {
      $('#curr').html('&#8372;&ensp;');
    }

    calc();
  });



});
