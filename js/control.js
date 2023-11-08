/* control page */
function controlPage(input) {
  switch (input) {
    case "home":
      window.location.href = "index.html";
      break;
    case "cart":
      window.location.href = "cart.html";
      break;
    case "categories":
      window.location.href = "categories.html";
      break;
    case "login":
      window.location.href = "login.html";
      break;
    case "product":
      window.location.href = "product.html";
      break;
  }
}
s

/* product-slider
$('.product-slider').slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: false,
  nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
  prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
  customPaging: function (slider, i) {
    var image = $(slider.$slides[i]).data('image');
    return '<img class="img-fluid" src="' + image + '" alt="product-img">';
  }
});*/
