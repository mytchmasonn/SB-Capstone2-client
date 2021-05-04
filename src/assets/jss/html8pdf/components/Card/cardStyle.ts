import {
  roseColor,
  primaryColor,
  successColor,
  dangerColor,
  warningColor,
  infoColor,
  hexToRgb,
  transition2bg,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const shared = createStyles({
  cardBackground: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    textAlign: "center",
    color: "#eee",
    "& h3": {
      color: "#eee",
    },
    "& p": {
      color: "rgba(" + hexToRgb("#eee") + ",0.7)!important",
    },
    "&:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""',
      backgroundColor: "rgba(0, 0, 0, 0.56)",
      borderRadius: "6px",
    },
    "& small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.7) !important",
    },
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center",
  },
  cardBlog: {
    marginTop: "60px",
  },
  cardRaised: {
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb("#000") +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb("#000") +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb("#000") +
      ", 0.2)",
  },
  cardProduct: {
    marginTop: "30px",
  },
  cardPricing: {
    textAlign: "center",
    "&:after": {
      backgroundColor: "rgba(0, 0, 0, 0.7) !important",
    },
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "10px auto",
    },
    "& ul li": {
      color: "#999",
      textAlign: "center",
      padding: "12px 0px",
      borderBottom: "1px solid rgba(" + hexToRgb("#999") + ",0.3)",
    },
    "& ul li:last-child": {
      border: 0,
    },
    "& ul li b": {
      color: "#3C4858",
    },
    "& h1": {
      marginTop: "30px",
    },
    "& h1 small": {
      display: "inline-flex",
      height: 0,
      fontSize: "18px",
    },
    "& h1 small:first-child": {
      position: "relative",
      top: "-17px",
      fontSize: "26px",
    },
    "& ul li svg,& ul li .fab,& ul li .fas,& ul li .far,& ul li .fal,& ul li .material-icons": {
      position: "relative",
      top: "7px",
    },
  },
  cardPricingColor: {
    "& ul li": {
      color: "#eee",
      borderColor: "rgba(" + hexToRgb("#eee") + ",0.3)",
      "& b, & svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: "#eee",
        fontWeight: 700,
      },
    },
  },
  primary: {
    background:
      "linear-gradient(60deg," + primaryColor[1] + ", " + primaryColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
  info: {
    background:
      "linear-gradient(60deg," + infoColor[1] + "," + infoColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
  success: {
    background:
      "linear-gradient(60deg," + successColor[1] + "," + successColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
  warning: {
    background:
      "linear-gradient(60deg," + warningColor[1] + "," + warningColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
  danger: {
    background:
      "linear-gradient(60deg," + dangerColor[1] + "," + dangerColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
  rose: {
    background:
      "linear-gradient(60deg," + roseColor[1] + "," + roseColor[2] + ")",
    "& h1 small": {
      color: "rgba(" + hexToRgb("#eee") + ", 0.8)",
    },
    color: "#eee",
  },
});

export const lightStyles = createStyles({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb("#000") +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb("#000") +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb("#000") +
      ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important",
    },
    color: "rgba(0, 0, 0, 0.87)",
    background: "#eee",
  },
  ...shared,
});
export const darkStyles = createStyles({
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb("#000") +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb("#000") +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb("#000") +
      ", 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important",
    },
    ...transition2bg,
    color: "rgba(" + hexToRgb("#eee") + ", 0.87)",
    background: "#222222",
  },
  ...shared,
});
