import programsBasicImg from "../../assets/images/programs-basic-img.jpg";
import programsIntermediateImg from "../../assets/images/programs-intermediate.jpg";
import programsAdvancedImg from "../../assets/images/programs-advanced.jpg";

export class Programs {
  constructor(el) {
    this.el = el;
    this.currentProgram = 1;
    this.addImages();
    this.attachEvents();
  }

  addImages = () => {
    $("#programs-basic").attr("src", programsBasicImg);
    $("#programs-intermediate").attr("src", programsIntermediateImg);
    $("#programs-advanced").attr("src", programsAdvancedImg);
  };

  attachEvents = () => {
    $(".types li a").click(function(e) {
      e.preventDefault();

      $(".types li a").removeClass("selected");
      $(this).addClass("selected");
      $(".program").removeClass("visible");
      $(this.hash).addClass("visible");
    });
  };
}
