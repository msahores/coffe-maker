export class Utils {
  constructor(el) {
    this.el = el;
    this.screen = el.screen;
    this.originalWidth = 1440;
    this.maxWidth = 1799;
    this.minWidth2 = 1850;
    this.originalHeight = 5602;
    
    this.attachEvents();
    this.screenHeightInit = this.getCurrentHeight(this.originalWidth);

    this.autoMargin();
  }
  
  attachEvents = () => {
    this.el.addEventListener("resize", () => this.autoMargin());
  };
  
  passesMediaQuery = (num, min = true) => {
    const open = min ? "(min-width: " : "(max-width: ";
    const close = "px";
    let construct = open + num + close;
    return this.el.matchMedia(construct).matches;
  }

  mediaQueryContext = () => {
    return this.passesMediaQuery(this.originalWidth) && this.passesMediaQuery(this.maxWidth, false) || this.passesMediaQuery(this.minWidth2)
  }
    
  autoMargin(){
    if(this.mediaQueryContext()){
      let originalLine = 2349;
      let targetLine = this.screen.width * originalLine / this.originalWidth;
      let diff = targetLine - originalLine;
      $('#gallery').css('margin-top', (153 + diff) + 'px');
    }
  }

  getCurrentHeight = ( width ) => {
    return width * (this.originalHeight / this.originalWidth);
  }
}