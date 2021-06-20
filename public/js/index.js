"use strict";

$(document).ready(function () {
  // ================  open menu ==================

  // remove menu handler
  const removeMenu = () => {
    $("#open-menu").css({ display: "block" });
    $("#close-menu").css({ display: "none" });

    return $(".links-container-sm").css({
      left: "-100%",
    });
  };

  //   handle animate in links on menu button click
  const animateInMenuLink = (index, link) => {
    return $(link)
      .delay(50 * index)
      .animate({
        left: "0%",
      });
  };
  // animate remove links handler
  const animateInMenuLinksOut = (index, link) => {
    return $(link)
      .delay(0 * index)
      .animate({
        left: "-100%",
      });
  };

  //   remove menu handler
  $("#open-menu").on("click", function () {
    //   remove menu btn
    $(this).css({
      display: "none",
    });
    // show close menu btn
    $("#close-menu")
      .css({
        display: "block",
      })
      .fadeIn();

    // slide in links on menu open
    $(".link").each(function (i, link) {
      animateInMenuLink(i, link);
    });

    // animate in side menu container
    $(".links-container-sm").animate({
      left: 0,
    });

    // close menu on each link click
    $(".link").each(function (i, link) {
      $(link).on("click", removeMenu);
    });
  });
  // ================ end of open menu ==================
  // ================ close menu ==================
  // close menu
  $("#close-menu").on("click", function () {
    $(this).css({
      display: "none",
    });
    // show open menu btn
    $("#open-menu").css({ display: "flex" });
    // animate slide out menu links on menu close
    $(".link").each(function (i, link) {
      animateInMenuLinksOut(i, link);
    });
    // animate slide out side menu
    removeMenu();
  });

  // navbar sticky

  $(window).on("scroll", () => {
    let top = $(window).scrollTop() || $("body").scrollTop();

    if (top >= 159) {
      $(".header").css({
        position: "sticky",
        top: "0%",
        opacity: "1",
        "z-index": "100",
      });
      $("#nav").css({
        "min-height": "3rem",
        "z-index": "100",
      });
    } else {
      $(".header").css({
        position: "sticky",
        top: "0%",
        opacity: "1",
        "z-index": "100",
      });
      $("#nav").css({
        "min-height": "5rem",
        "z-index": "100",
      });
    }
  });

  // ================ end of close menu ==================
});
