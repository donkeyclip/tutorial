import { HTMLClip } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

import { inout } from "./scenes/slideinout";
import { circle } from "./animations/intro";

const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "780px",
    height: "450px",
  },
});


clip.addIncident(inout,2500);
clip.addIncident(circle,0);
export { clip };
