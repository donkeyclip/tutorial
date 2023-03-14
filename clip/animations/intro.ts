import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);

export const circle = new Titles.Circle(
  {
    fontSize: 40,
    circleColor: "@initParams.colorD",
    textColor: "@initParams.colorB",
    title: "WINTER 2022",
    subTitle: "walk / run / pose",
    stopOnLast: false,
    fontFamily: "Oswald",
    width: 400,
  },
  {
    selector: "#intro",
    duration:4000
  }
);