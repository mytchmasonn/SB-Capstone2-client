import { primaryColor, roseColor, hexToRgb } from "assets/jss/html8pdf";

import { createStyles } from "@material-ui/core/styles";

const parallaxStyle = () =>
  createStyles({
    parallax: {
      height: "100vh",
      maxHeight: "1600px",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    filter: {},
    primaryColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(primaryColor[4]) +
          ",.56),rgba(" +
          hexToRgb("#71afe5") +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    roseColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb(roseColor[3]) +
          ",.56),rgba(" +
          hexToRgb(roseColor[4]) +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    darkColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    darkerColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.7)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    infoColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb("#b2ebf2") +
          ",.56),rgba(" +
          hexToRgb("#4dd0e1") +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    successColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb("#a5d6a7") +
          ",.56),rgba(" +
          hexToRgb("#66bb6a") +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    warningColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb("#ffe0b2") +
          ",.56),rgba(" +
          hexToRgb("#ffb74d") +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    dangerColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(" +
          hexToRgb("#ef9a9a") +
          ",.56),rgba(" +
          hexToRgb("#ef5350") +
          ",.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    lg: {
      height: "100vh",
      maxHeight: "1600px",
    },
    md: {
      height: "65vh",
      minHeight: "65vh",
      maxHeight: "650px",
    },
    sm: {
      height: "55vh",
      minHeight: "55vh",
      maxHeight: "550px",
    },
    xs: {
      height: "45vh",
      minHeight: "45vh",
      maxHeight: "450px",
    },
    xxs: {
      height: "25vh",
      minHeight: "25vh",
      maxHeight: "250px",
    },
  });

export default parallaxStyle;
