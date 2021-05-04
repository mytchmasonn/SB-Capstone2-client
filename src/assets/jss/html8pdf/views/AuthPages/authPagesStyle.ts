import {
  primaryColor,
  cardTitle,
  hexToRgb,
  transition2bg,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core/styles";

const fullInherit = createStyles({
  containerNoFlex: {
    zIndex: 2,
    position: "relative",
    paddingTop: "10vh",
    color: "#fff",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingBottom: "0px",
    width: "100%",
  },
  cardSignup: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);",
    padding: "40px 0px",
  },
  submitButtonContainer: {
    textAlign: "center",
  },
  form: {
    margin: "0",
  },
  inputIconsColor: {
    color: "#a9a9a9",
  },
  needAnAccountContainer: {
    fontSize: "16px",
    textAlign: "center",
    cursor: "pointer",
    paddingBottom: "10px",
    verticalAlign: "center",
  },
  signupInsteadText: {
    fontWeight: "bold",
    color: "#0078d4",
  },
  checkRoot: {
    padding: "14px",
    transition: "0.3s ease all",

    "&:hover": {
      backgroundColor:
        "rgba(" + hexToRgb(primaryColor[0]) + ", 0.14) !important",
      transition: "0.3s ease all",
    },
  },
  checked: {
    color: primaryColor[0] + "!important",
  },
  checkedIcon: {
    width: "22px",
    height: "22px",
    border: "2px solid rgba(" + hexToRgb("#666") + ", 0.84)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "2px solid rgba(" + hexToRgb("#666") + ", .54)",
    borderRadius: "3px",
  },
  formControlLabelRoot: {
    marginRight: "0",
  },
  checkboxLabel: {
    paddingLeft: "0",
    color: "#AAA",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: 400,
    display: "inline-flex",
    letterSpacing: "unset",
  },
  checkboxLabelPlus: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "#AAA",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: 400,
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
    "&:hover": {
      textDecoration: "underline",
      color: "#0078d4",
    },
  },
  appBar: {
    position: "relative",
    backgroundColor: "#0078d4",
  },
  title: {
    flex: 1,
    fontSize: "20px",
  },
  passwordValidLabelText: {
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "-5px",
  },
  errorMessageContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
export const lightStyles = () =>
  createStyles({
    pageHeader: {
      minHeight: "100vh",
      height: "auto",
      display: "inherit",
      position: "relative",
      margin: "0",
      padding: "0",
      border: "0",
      alignItems: "center",
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:before,&:after": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: '""',
        ...transition2bg,
      },
      "&:after": {
        background: "rgba(" + hexToRgb(primaryColor[0]) + ",.46)",
      },
    },
    cardTitle: {
      ...cardTitle,
      textDecoration: "none",
      textAlign: "center",
      marginBottom: "0.75rem",
    },
    dialogPaper: {
      backgroundColor: "#eee",
    },
    ...fullInherit,
  });

export const darkStyles = () =>
  createStyles({
    pageHeader: {
      minHeight: "100vh",
      height: "auto",
      display: "inherit",
      position: "relative",
      margin: "0",
      padding: "0",
      border: "0",
      alignItems: "center",
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:before,&:after": {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: '""',
        ...transition2bg,
      },
      "&:after": {
        background: "rgba(" + hexToRgb("#222222") + ",.66)",
      },
    },
    cardTitle: {
      ...cardTitle,
      textDecoration: "none",
      textAlign: "center",
      marginBottom: "0.75rem",
      color: "#eee",
    },
    dialogPaper: {
      backgroundColor: "#222",
    },

    ...fullInherit,
  });
