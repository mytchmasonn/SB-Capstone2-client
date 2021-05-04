import { createStyles } from "@material-ui/core";
import { container, title, mrAuto, mlAuto } from "assets/jss/html8pdf";

export const lightStyles = () =>
  createStyles({
    container: {
      ...container,
      zIndex: 1,
    },
    title: {
      ...title,
      "&, & + h4": {
        color: "#111",
      },
    },
    textCenter: {
      textAlign: "center",
    },
    mrAuto,
    mlAuto,
  });

export const darkStyles = () =>
  createStyles({
    container: {
      ...container,
      zIndex: 1,
      color: "#eee",
    },
    title: {
      ...title,
      "&, & + h4": {
        color: "#fff",
      },
    },
    textCenter: {
      textAlign: "center",
    },
    mrAuto,
    mlAuto,
  });
