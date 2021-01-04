
$(function () {

  //!preloader
  $('.preloader').fadeOut('slow');
  $('body').css('overflow', 'auto');

  //!main page sub-menu 
  $('.sub-menu__btn').click(function (e) {
    $('.sub-menu__btn span').toggleClass('burger');
    $('.sub-menu li').toggleClass('visible');
    $('.sub-menu').toggleClass('sub-menu-bg');
  });

  //!main page mobile-menu 
  $('.mobile-menu__btn').click(function (e) {
    $('.mobile-menu__btn span').toggleClass('burger');
    $('.mobile-menu li').toggleClass('visible');
    $('.mobile-menu').toggleClass('mobile-menu-bg');
  });

  //! slider
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

  //! callback
  $('.callback-btn').click(function () {
    $('.modal-wrapper').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.callback-form .close').click(function () {
    $('.modal-wrapper').css('display', 'none');
    $('body').css('overflow', 'auto');
  });

  $(document).keyup(function (e) {
    if (e.which == 27) {
      $('.modal-wrapper').css('display', 'none');
      $('body').css('overflow', 'auto');
    }
  });

  $('.expert-btn').click(function () {
    $('.modal-wrapper-expert').css('display', 'flex');
    $('body').css('overflow', 'hidden');
  });

  $('.callback-form .close').click(function () {
    $('.modal-wrapper-expert').css('display', 'none');
    $('body').css('overflow', 'auto');
  });

  $(document).keyup(function (e) {
    if (e.which == 27) {
      $('.modal-wrapper-expert').css('display', 'none');
      $('body').css('overflow', 'auto');
    }
  });

  //! callback phone
  $('#phone').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  //! wow
  let wow = new WOW({
    offset: 50
  });
  wow.init();

  //! aos
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

  //! relax
  let rellax = new Rellax('.rellax, .parallax', {
    speed: 0.2,
  });

  //! steps
  if (window.screen.width <= 480) {
    $('.steps__arrow').removeClass('arrow-horisontal');
    $('.steps__arrow').addClass('arrow-vertical');
  }

  //! team
  $('.team__mobile-tab').click(function () {
    $('.team').css('height', 'auto');
    $('.team').css('overflow', 'visible');
    $('.member:nth-child(n+5)').css('opacity', '1');
    $('.member:nth-child(n+3)').css('opacity', '1');
    $('.team__mobile-tab').css('display', 'none');
    $('.footer').css('margin-top', '0');
  });

  //!about button
  $('.about__btn-mob').click(function () {
    $('.about__btn-mob').css('display', 'none');
    $('.about__text-mob').css('display', 'block');
  })

  //! to-top
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  //!main page active navbar 
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

});
