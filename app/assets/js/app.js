var
  currentDevice,
  $body = $("body");

if (isDesktop()) {
  currentDevice = "desktop";

  $body.addClass("device--is-desktop");
} else {
  currentDevice = "mobile";

  $body.addClass("device--is-mobile");
}

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
    pageDots: false,
    wrapAround: true
  });
}

initFlickity();

// jQuery hover.
if (currentDevice === "mobile") {
  $("[data-hover]")
    .on("click", function() {
      $(this)
        .toggleClass("hover--is-active")
        .siblings().removeClass("hover--is-active");
    });
}
