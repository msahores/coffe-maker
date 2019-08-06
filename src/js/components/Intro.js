import arrowDownImg from "../../assets/images/intro-arrow-down.png";

export class Intro {
  constructor(el) {
    this.el = el;
    this.attachEvents();
  }

  attachEvents = () => {
    $("#arrow-down").attr("src", arrowDownImg);
  };
}
