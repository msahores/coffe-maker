import logoImg from "../../assets/images/logo.png";

export class Header {
  constructor(el) {
    this.el = el;
    this.appendElements();
    this.attachEvents();
    this.activeLink();
    this.scrollEffect();
  }

  appendElements = () => {
    $("#logo").attr("src", logoImg);
  };

  attachEvents = () => {
    $("header .burger").click(() => this.expandMenu());
    $("#menu a, #menu").click(() => this.collapseMenu());
  };

  expandMenu = () => {
    $("#menu").toggleClass("moveLeft");
    $("#menu").addClass("withTransition");
    $("body, html").addClass("noScroll");
  };

  collapseMenu = () => {
    $("#menu").removeClass("moveLeft");
    $("#menu").removeClass("withTransition");
    $("body, html").removeClass("noScroll");
  };

  scrollEffect = () => {
    $(".scrollable").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash + " h2").offset().top
          },
          800
        );
      }
    });
  };
  activeLink = () => {
    $(".header nav > a").click(function(e) {
      e.preventDefault();
      $(".header nav > a").removeClass("active");
      $(this).addClass("active");
    });
  };
}
