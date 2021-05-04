import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const badgeStyle = () =>
  createStyles({
    badge: {
      marginRight: "3px",
      borderRadius: "12px",
      padding: "5px 12px",
      textTransform: "uppercase",
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "1",
      color: "#fff",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      display: "inline-block",
    },
    primary: {
      backgroundColor: primaryColor[0],
    },
    warning: {
      backgroundColor: warningColor[0],
    },
    danger: {
      backgroundColor: dangerColor[0],
    },
    success: {
      backgroundColor: successColor[0],
    },
    info: {
      backgroundColor: infoColor[0],
    },
    rose: {
      backgroundColor: roseColor[0],
    },
    gray: {
      backgroundColor: "#6c757d",
    },
    transparent: {
      backgroundColor: "transparent",
    },
  });

export default badgeStyle;
