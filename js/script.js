$(document).ready(function () {
  let timeOutId;
  let linksVisible = false;

  document.querySelectorAll(".card-footer").forEach(function (element, index) {
    element.addEventListener("mouseover", function () {
      element.parentNode.classList.add("hovered");
      this.classList.add("hovered");
      this.style.borderColor = "var(--sky-blue)";
      $(".add-to-cart").eq(index).css("width", "100%");
      $(".add-to-cart").eq(index).css("background-color", "var(--sky-blue)");
      clearTimeout(timeOutId);
      timeOutId = setTimeout(
        () => $(".add-to-cart p").eq(index).css("display", "block"),
        100
      );
    });

    element.addEventListener("mouseout", function () {
      element.parentNode.classList.remove("hovered");
      this.style.borderColor = "var(--red)";
      $(".add-to-cart").eq(index).css("width", "5em");
      $(".add-to-cart").eq(index).css("background-color", "var(--red)");
      clearTimeout(timeOutId);
      $(".add-to-cart p").eq(index).css("display", "none");
    });
  });

  $("#show-links").click(() => {
    if (linksVisible) {
      linksVisible = false;
      $(".right-links, .left-links").slideUp();
    } else {
      linksVisible = true;
      $(".right-links, .left-links").slideDown();
    }
  });

  const scrollBy = (direction) => {
    const carousel = document.querySelector(".carousel");
    const scrollAmount = carousel.offsetWidth;

    if (direction === "next") {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    } else {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  $("#previous").click(() => scrollBy("prev"));
  $("#next").click(() => scrollBy("next"));

  /** sidebar function */
  $(".open-sidebar").click(() => {
    $(".nav-bottom-wrapper").fadeIn();
    $("body").css("overflow", "hidden");
  });
  $(".close").click(() => {
    $(".nav-bottom-wrapper").fadeOut();
    $("body").css("overflow", "auto");
  });
});
