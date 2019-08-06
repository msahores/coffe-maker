import "../css/main.scss";
import "jquery";

import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Programs } from "./components/Programs";
import { Partners } from "./components/Partners";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Utils } from "./components/Utils";

$(function() {
  const header = new Header($(".header"));
  const intro = new Intro($("#intro"));
  const programs = new Programs($("#programs"));
  const partners = new Partners($("#partners"));
  const gallery = new Gallery($(".galleryContainer"));
  const testimonials = new Testimonials($("#testimonials"));
});