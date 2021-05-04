import { container, primaryColor, hexToRgb } from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const shared = createStyles({
  left: {
    float: "left",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    fontSize: "12px",
  },
  rightLinks: {
    float: "right",
    "& ul": {
      marginBottom: 0,
      marginTop: 10,
      padding: 0,
      listStyle: "none",
      height: 38,
      "& li": {
        display: "inline-block",
      },
    },
    "& i": {
      fontSize: "20px",
    },
  },
  content: {
    textAlign: "left",
  },
  a: {
    color: primaryColor[0],
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem 0.9375rem 0",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
  iconSocial: {
    width: "41px",
    height: "41px",
    fontSize: "24px",
    minWidth: "41px",
    padding: 0,
    overflow: "hidden",
    position: "relative",
  },
  pullCenter: {
    display: "inline-block",
    float: "none",
  },
  clearFix: {
    clear: "both",
  },
  white: {
    backgroundColor: "#fff",
    color: "#ddd",
    textDecoration: "none",
    "& a": {
      "&:visited": {
        color: "#3C4858",
      },
      "&:hover, &:focus": {
        color: hexToRgb(primaryColor[1]),
      },
    },
  },
});
export const lightStyles = () =>
  createStyles({
    footer: {
      padding: "0.9375rem 0",
      textAlign: "center",
      display: "flex",
      zIndex: 2,
      position: "relative",
      "& ul": {
        marginBottom: "0",
        padding: 0,
        listStyle: "none",
      },
      color: "#aaa",
    },
    big: {
      padding: "1.875rem 0",
      "& h5, & h4": {
        fontWeight: 700,
        fontFamily: "Roboto Slab,Times New Roman,serif",
        marginBottom: "15px",
      },
      "& p": {
        color: "#ddd",
      },
    },
    dark: {
      background:
        "radial-gradient(ellipse at center," +
        hexToRgb("#585858") +
        " 0," +
        hexToRgb("#232323") +
        " 100%)",
      backgroundSize: "550% 450%",
      color: "#fff",
      "& p": {
        color: hexToRgb("#999"),
      },
      "& i": {
        color: "#fff",
      },
      "& a": {
        color: "#fff",
        opacity: ".86",
        "&:visited": {
          color: "#fff",
        },
        "&:focus, &:hover": {
          opacity: 1,
        },
      },
      "& hr": {
        borderColor: "rgba(" + hexToRgb("#fff") + ",0.2)",
      },
    },
    footerBrand: {
      height: "50px",
      padding: "15px 15px",
      fontSize: "18px",
      lineHeight: "50px",
      marginLeft: "-15px",
      textDecoration: "none",
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      color: "#ddd",
    },
    ...shared,
  });

export const darkStyles = () =>
  createStyles({
    footer: {
      padding: "0.9375rem 0",
      textAlign: "center",
      display: "flex",
      zIndex: 2,
      position: "relative",
      "& ul": {
        marginBottom: "0",
        padding: 0,
        listStyle: "none",
      },
      color: "#aaa",
    },
    big: {
      padding: "1.875rem 0",
      "& h5, & h4": {
        fontWeight: 700,
        fontFamily: "Roboto Slab,Times New Roman,serif",
        marginBottom: "15px",
      },
      "& p": {
        color: "#999",
      },
    },
    dark: {
      background:
        "radial-gradient(ellipse at center," +
        hexToRgb("#585858") +
        " 0," +
        hexToRgb("#232323") +
        " 100%)",
      backgroundSize: "550% 450%",
      color: "#fff",
      "& p": {
        color: hexToRgb("#999"),
      },
      "& i": {
        color: "#fff",
      },
      "& a": {
        color: "#fff",
        opacity: ".86",
        "&:visited": {
          color: "#fff",
        },
        "&:focus, &:hover": {
          opacity: 1,
        },
      },
      "& hr": {
        borderColor: "rgba(" + hexToRgb("#fff") + ",0.2)",
      },
    },
    footerBrand: {
      height: "50px",
      padding: "15px 15px",
      fontSize: "18px",
      lineHeight: "50px",
      marginLeft: "-15px",
      textDecoration: "none",
      fontWeight: 700,
      fontFamily: "Roboto Slab,Times New Roman,serif",
      color: "#3C4858",
    },
    ...shared,
  });
