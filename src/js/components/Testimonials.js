import "slick-carousel";

import testimonial_1 from "../../assets/images/testimonials/testimonial_1.png";
import testimonial_2 from "../../assets/images/testimonials/testimonial_2.png";
import testimonial_3 from "../../assets/images/testimonials/testimonial_3.png";

export class Testimonials {
  constructor(el) {
    this.el = el;
    this.elements = [testimonial_1, testimonial_2, testimonial_3];
    this.slideDom = ".images-container";

    this.appendElements(this.slideDom, this.elements);
    this.createGallery(this.slideDom);
  }

  appendElements = (target, elements) => {
    for (let i = 0; i < this.elements.length; i++) {
      $(target).append(`<img class='galleryItem' src='${this.elements[i]}'/>`);
    }
  };

  createGallery = target => {
    $(target).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dotsClass: "testimonials_dots",
      arrows: false
    });
  };
}
