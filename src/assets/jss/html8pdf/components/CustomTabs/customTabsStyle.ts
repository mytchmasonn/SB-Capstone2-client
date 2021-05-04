import { createStyles } from "@material-ui/core";
import { defaultFont, transition, hexToRgb } from "assets/jss/html8pdf";

const shared = createStyles({
  displayNone: {
    display: "none",
    ...transition,
  },
  tabsContainer: {
    ...transition,
  },
  tabIcon: {
    width: "24px",
    height: "24px",
    marginRight: "4px",
    ...transition,
  },
  customTabsRoot: {
    minHeight: "unset !important",
    ...transition,
  },
  customTabRoot: {
    width: "auto",
    minWidth: "70px",
    borderRadius: "3px",
    opacity: "1",
    height: "auto",
    padding: "10px 40px",
    display: "block",
    minHeight: "unset",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "24px",
    ...transition,
  },
  customTabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    ...transition,

    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important",
      ...transition,
    },
    "&,& *": {
      letterSpacing: "normal !important",
      ...transition,
    },
  },
});

export const lightStyles = () =>
  createStyles({
    cardTitle: {
      ...defaultFont,
      float: "left",
      padding: "10px 10px 10px 0",
      lineHeight: "24px",
      fontSize: "14px",
      color: "#fff",
    },

    customTabSelected: {
      backgroundColor: "rgba(" + hexToRgb("#fff") + ", 0.2)",
      ...transition,
    },
    ...shared,
  });

export const darkStyles = () =>
  createStyles({
    cardTitle: {
      ...defaultFont,
      float: "left",
      padding: "10px 10px 10px 0",
      lineHeight: "24px",
      fontSize: "14px",
      color: "#fff",
    },
    customTabSelected: {
      backgroundColor: "rgba(" + hexToRgb("#fff") + ", 0.2)",
      ...transition,
    },
    ...shared,
  });
