import { loadPlugin } from "@donkeyclip/motorcortex";
import TitlesPlugin from "@donkeyclip/motorcortex-animetitles";
const Titles = loadPlugin(TitlesPlugin);

export const circle = new Titles.Circle(
  {
    fontSize: 40,
    circleColor: "#ff0000",
    textColor: "#d0ff00",
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