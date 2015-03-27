$("[data-masonry]").imagesLoaded(function() {
  $("[data-masonry]").masonry({
    itemSelector: "[data-masonry-item]",
    columnWidth: "[data-column]",
    gutter: "[data-gutter]",

    isFitWidth: true
  });
});

$.featherlight.defaults.closeIcon = "";

$.featherlight.defaults.afterOpen = function(event) {
  $("body").addClass("featherlight--is-on");

  initFlickity();
};

$.featherlight.defaults.afterClose = function(event) {
  $("body").removeClass("featherlight--is-on");
};

$("[data-scrollto]").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, durBasic);
  return false
});

function initFlickity() {
  $("[data-flickity]").flickity({
    setGallerySize: false,
    pageDots: false
  });
}

initFlickity();
