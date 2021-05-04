import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  title,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core/styles";

export const lightStyles = () =>
  createStyles({
    infoArea: {
      maxWidth: "360px",
      margin: "0 auto",
      padding: "70px 0 30px",
    },
    iconWrapper: {
      float: "left",
      marginTop: "24px",
      marginRight: "10px",
      textAlign: "center",
    },
    primary: {
      color: primaryColor[0],
    },
    warning: {
      color: warningColor[0],
    },
    danger: {
      color: dangerColor[0],
    },
    success: {
      color: successColor[0],
    },
    info: {
      color: infoColor[0],
    },
    rose: {
      color: roseColor[0],
    },
    gray: {
      color: "#999",
    },
    icon: {
      width: "2.25rem",
      height: "2.25rem",
      fontSize: "2.25rem",
    },
    descriptionWrapper: {
      color: "#999",
      overflow: "hidden",
    },
    title: {
      ...title,
      textAlign: "center",
      margin: "1.75rem 0 0.875rem !important",
      minHeight: "unset",
    },
    description: {
      color: "#999",
      overflow: "hidden",
      marginTop: "0px",
      textAlign: "center",
      fontWeight: 400,

      "& p": {
        color: "#999",
        fontSize: "14px",
      },
    },
    iconWrapperVertical: {
      float: "none",
    },
    iconVertical: {
      width: "61px",
      height: "61px",
    },
  });

export const darkStyles = () =>
  createStyles({
    infoArea: {
      maxWidth: "360px",
      margin: "0 auto",
      padding: "70px 0 30px",
    },
    iconWrapper: {
      float: "left",
      marginTop: "24px",
      marginRight: "10px",
      textAlign: "center",
    },
    primary: {
      color: primaryColor[0],
    },
    warning: {
      color: warningColor[0],
    },
    danger: {
      color: dangerColor[0],
    },
    success: {
      color: successColor[0],
    },
    info: {
      color: infoColor[0],
    },
    rose: {
      color: roseColor[0],
    },
    gray: {
      color: "#999",
    },
    icon: {
      width: "2.25rem",
      height: "2.25rem",
      fontSize: "2.25rem",
    },
    descriptionWrapper: {
      color: "#999",
      overflow: "hidden",
    },
    title: {
      ...title,
      textAlign: "center",
      margin: "1.75rem 0 0.875rem !important",
      minHeight: "unset",
    },
    description: {
      color: "#999",
      overflow: "hidden",
      marginTop: "0px",
      textAlign: "center",
      fontWeight: 400,

      "& p": {
        color: "#999",
        fontSize: "14px",
      },
    },
    iconWrapperVertical: {
      float: "none",
    },
    iconVertical: {
      width: "61px",
      height: "61px",
    },
  });
