import slider1 from "../../assets/images/partners/partner_1.png";
import slider2 from "../../assets/images/partners/partner_2.png";
import slider3 from "../../assets/images/partners/partner_3.png";
import slider4 from "../../assets/images/partners/partner_4.png";
import slider5 from "../../assets/images/partners/partner_5.png";
import slider6 from "../../assets/images/partners/partner_6.png";

import "slick-carousel";

export class Partners {
  constructor(el) {
    this.el = el;
    this.elements = [slider1, slider2, slider3, slider4, slider5, slider6];
    this.container = $("#slider");
    this.appendElements(this.container, this.elements);
    this.createPGallery(this.container);
  }

  appendElements = (target, elements) => {
    for (let i = 0; i < elements.length; i++) {
      $(target).append(`<img src='${elements[i]}'/>`);
    }
  };

  createPGallery = target => {
    target.slick({
      infinite: true,
      prevArrow: $("#partners .before"),
      nextArrow: $("#partners .after"),
      slidesToScroll: 1,
      dots: false,
      variableWidth: true,
      speed: 500,
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            variableWidth: true,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
            adaptiveHeight: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
    });
  };
}
