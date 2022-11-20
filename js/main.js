// const gTop = document.getElementById("gTop");

// const gThumbs = document.querySelectorAll(".gallery .gallery__thumb-img");
// const thumbArea = document.querySelector(".gallery .gallery__thumb");

// gThumbs.forEach((thumb) => {
//   thumb.addEventListener("click", (e) => {
//     let getSrc = thumb.getAttribute("src");
//     gTop.setAttribute("src", getSrc);
//   });
// });

// $(".gallery .gallery__thumb-img").on("click", function () {
//   $(".gallery").find(".selected").removeClass("selected");
//   $(this).addClass("selected");
//   // $("#gTop").setAttribute("src", $(this).getAttribute("src"));
// });

// $(".mynav .mynav__item").on("click", function () {
//   $(".mynav").find(".active").removeClass("active");
//   $(this).addClass("active");
// });

$(".showcase__thumb .showcase__thumb-img").on("click", function () {
  $(".showcase").find(".js-selected").removeClass("js-selected");
  $(this).addClass("js-selected");
  console.log(this);
  $("#showTop").attr("src", $(this).attr("src"));
});

$(".owl-item.cloned").on("click", function () {
  console.log("clone clicked");
});

//copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();
