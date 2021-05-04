import { mlAuto, hexToRgb, primaryColor, infoColor } from "assets/jss/html8pdf";

import { createStyles } from "@material-ui/core/styles";

const shared = createStyles({
  listItemText: {
    padding: "0 !important",
  },
  navLinkJustIcon: {
    "& .fab,& .far,& .fal,& .fas,& .material-icons": {
      marginRight: "0px",
    },
    "& svg": {
      marginRight: "0px",
    },
  },
  notificationNavLink: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: 400,
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  registerNavLink: {
    position: "relative",
    fontWeight: 400,
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "14px",
  },
  dropdownIcons: {
    width: "24px",
    height: "24px",
    marginRight: "14px",
    opacity: "0.5",
    marginTop: "-4px",
    top: "1px",
    verticalAlign: "middle",
    fontSize: "24px",
    position: "relative",
  },
  socialIcons: {
    position: "relative",
    fontSize: "1.25rem",
    maxWidth: "24px",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "flex",
      padding: "0.75rem 1.25rem 0.75rem 0.75rem",
    },
  },
  marginRight5: {
    marginRight: "5px",
  },
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    lineHeight: "1.7em",
    border: "none",
    borderRadius: "3px",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: 400,
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb("#000") +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb("#000") +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb("#000") +
      ", 0.2)",
    background: "rgba(" + hexToRgb("#555") + ",0.9)",
    color: "#fff",
  },
  switchBase: {
    color: primaryColor[0] + "!important",
    "&:hover": {
      backgroundColor:
        "rgba(" + hexToRgb(primaryColor[0]) + ", 0.14) !important",
    },
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#fff",
    border: "1px solid rgba(0, 0, 0, .54)",
    height: "24px",
    width: "24px",
  },
  switchIconChecked: {
    borderColor: primaryColor[0],
    transform: "translateX(0px)!important",
    height: "24px",
    width: "24px",
  },
  switchBar: {
    width: "40px",
    height: "20px",
    backgroundColor: "rgb(" + hexToRgb("#505050") + ")",
    borderRadius: "15px",
    opacity: "0.7!important",
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(" + hexToRgb(primaryColor[1]) + ", 1) !important",
    },
    "& $switchIcon": {
      borderColor: primaryColor[0],
    },
  },
  mlAuto,
});

export const lightStyles = (theme) =>
  createStyles({
    list: {
      [theme.breakpoints.up("md")]: {
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        WebkitBoxOrient: "horizontal",
        WebkitBoxDirection: "normal",
        MsFlexDirection: "row",
        flexDirection: "row",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      marginTop: "0px",
      display: "flex",
      paddingLeft: "0",
      marginBottom: "0",
      listStyle: "none",
      padding: "0",
    },
    listItem: {
      float: "left",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
        "& ul": {
          maxHeight: "400px",
          overflow: "scroll",
        },
        width: "100%",
        "&:not(:last-child)": {
          "&:after": {
            width: "calc(100% - 30px)",
            content: '""',
            display: "block",
            height: "1px",
            marginLeft: "15px",
            backgroundColor: hexToRgb("#e5e5e5"),
          },
        },
        color: "#444",
        "&:hover": {
          color: "#0078d4",
        },
      },
      color: "#fff",
      "&:hover": {
        color: "#0078d4",
      },
    },
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover": {
        color: infoColor[1],
      },
      "& .fab,& .far,& .fal,& .fas,& .material-icons": {
        position: "relative",
        top: "2px",
        marginTop: "-4px",
        marginRight: "4px",
        marginBottom: "0px",
        fontSize: "1.25rem",
      },
      "& svg": {
        marginRight: "3px",
        width: "20px",
        height: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    },
    navButton: {
      position: "relative",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "& $icons": {
        marginRight: "3px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "5px",
        marginTop: "5px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    },
    navLinkActive: {
      "&, &:hover, &:focus,&:active ": {
        color: "inherit",
        backgroundColor: "rgba(" + hexToRgb("#fff") + ", 0.1)",
      },
    },
    collapse: {
      WebkitBoxFlex: 1,
      MsFlexPositive: "1",
      flexGrow: 1,
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex !important",
        MsFlexPreferredSize: "auto",
        flexBasis: "auto",
      },
    },
    ...shared,
  });
export const darkStyles = (theme) =>
  createStyles({
    list: {
      [theme.breakpoints.up("md")]: {
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center",
        WebkitBoxOrient: "horizontal",
        WebkitBoxDirection: "normal",
        MsFlexDirection: "row",
        flexDirection: "row",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      marginTop: "0px",
      display: "flex",
      paddingLeft: "0",
      marginBottom: "0",
      listStyle: "none",
      padding: "0",
    },
    listItem: {
      float: "left",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
        "& ul": {
          maxHeight: "400px",
          overflow: "scroll",
        },
        width: "100%",
        "&:not(:last-child)": {
          "&:after": {
            width: "calc(100% - 30px)",
            content: '""',
            display: "block",
            height: "1px",
            marginLeft: "15px",
            backgroundColor: hexToRgb("#e5e5e5"),
          },
        },
      },
      color: "#fff",
      "&:hover": {
        color: "#0078d4",
      },
    },
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover": {
        color: infoColor[1],
      },
      "& .fab,& .far,& .fal,& .fas,& .material-icons": {
        position: "relative",
        top: "2px",
        marginTop: "-4px",
        marginRight: "4px",
        marginBottom: "0px",
        fontSize: "1.25rem",
      },
      "& svg": {
        marginRight: "3px",
        width: "20px",
        height: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "8px",
        marginTop: "8px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    },
    navButton: {
      position: "relative",
      fontWeight: 400,
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "& $icons": {
        marginRight: "3px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 30px)",
        marginLeft: "15px",
        marginBottom: "5px",
        marginTop: "5px",
        textAlign: "left",
        "& > span:first-child": {
          justifyContent: "flex-start",
        },
      },
    },
    navLinkActive: {
      "&, &:hover, &:focus,&:active ": {
        color: "inherit",
        backgroundColor: "rgba(" + hexToRgb("#fff") + ", 0.1)",
      },
    },
    collapse: {
      WebkitBoxFlex: 1,
      MsFlexPositive: "1",
      flexGrow: 1,
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        display: "flex !important",
        MsFlexPreferredSize: "auto",
        flexBasis: "auto",
      },
    },
    ...shared,
  });
