import "slick-carousel";

import gallery_1 from "../../assets/images/gallery/gallery_1.jpg";
import gallery_2 from "../../assets/images/gallery/gallery_2.jpg";
import gallery_3 from "../../assets/images/gallery/gallery_3.jpg";
import gallery_4 from "../../assets/images/gallery/gallery_4.jpg";
import gallery_5 from "../../assets/images/gallery/gallery_5.jpg";

export class Gallery {
  constructor(el) {
    this.el = el;
    this.elements = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5];
    this.slideDom = ".galleryContainer";

    this.appendElements(this.slideDom, this.elements);
    this.createGallery();
    this.setSlideIndex();
    this.setActiveTab();
  }

  appendElements = (target, elements) => {
    for (let i = 0; i < elements.length; i++) {
      $(target).append(`<img class='galleryItem' src='${elements[i]}'/>`);
    }
  };

  createGallery = () => {
    $(this.slideDom).slick({
      infinite: true,
      prevArrow: $(".left"),
      nextArrow: $(".right"),
      slidesToScroll: 1,
      dots: false,
      variableWidth: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true
    });
  };

  setSlideIndex = () => {
    $(".actual").html(this.getCurrentSlide());
    $(".total").html(this.elements.length);
    $(".arrow").click(() => {
      $(".actual").html(this.getCurrentSlide());
    });
  };

  getCurrentSlide = () => {
    return $(this.slideDom).slick("slickCurrentSlide") + 1;
  };

  setActiveTab = () => {
    $(".types li").click(function(e) {
      e.preventDefault();
      $(".types li").removeClass("selected");
      $(this).addClass("selected");
    });
  };
}
