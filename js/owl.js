$(document).ready(function () {
  var owl = $(".owl-carousel.owl-carousel-1");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    rewind: false,
    responsive: {
      0: {
        items: 2.3,
        nav: false,
      },
      575: {
        items: 3.5,
        nav: true,
      },
      1000: {
        items: 4.5,
        nav: true,
      },
    },
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel.owl-carousel-2");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel.owl-carousel-3");
  owl.owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    items: 1,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    // autoplay: false,
    // autoplayTimeout: 5000,
    // autoplaySpeed: 1000,
    // autoplayHoverPause: true,
  });
});
