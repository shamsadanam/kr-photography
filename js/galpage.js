$(".filter__img").on("click", function () {
  $("#sImg").attr("src", this.getAttribute("src"));
  $("#sTitle").text(this.getAttribute("alt"));
});
