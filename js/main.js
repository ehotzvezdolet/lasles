$(function(){

$('.plan__col-item').on('click', function(){
    $('.plan__col-btn').toggleClass('active'),
    $('.plan__col-item').toggleClass('active');
});
$('.plan__col-item--second').on('click', function(){
    $('.plan__col-btn--second').toggleClass('active'),
    $('.plan__col-item--second').toggleClass('active');
});
$('.plan__col-item--three').on('click', function(){
    $('.plan__col-btn--three').toggleClass('active'),
    $('.plan__col-item--three').toggleClass('active');
});
$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 2
        }
      },
    ]
  });
  $('.burger-menu').on('click', function(){
    $('.header__menu').slideToggle();
  });
});