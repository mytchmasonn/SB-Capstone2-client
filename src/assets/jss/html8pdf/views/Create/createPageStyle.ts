import {
  primaryColor,
  cardTitle,
  hexToRgb,
  transition,
  transition2,
  transition2bg,
  transitionText,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core/styles";

const fullInherit = createStyles({
  containerNoFlex: {
    zIndex: 2,
    position: "relative",
    paddingTop: "17vh",
    color: "#fff",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingBottom: "0px",
    width: "100%",
    ...transition2,
  },
  containerNoFlexM: {
    zIndex: 2,
    position: "relative",
    paddingTop: "15vh",
    color: "#fff",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingBottom: "0px",
    width: "100%",
    ...transition2,
  },

  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    ...transition2,
  },
  cardBodyMod: {
    paddingTop: 0,
    paddingLeft: "10px",
    paddingRight: "10px",
    minHeight: "20vh",
  },
  textCenter: {
    textAlign: "center",
  },
  form: {
    margin: "0",
  },
  anchorMod: {
    color: "inherit",
    "&:hover": {
      color: "#fff",
      ...transition2,
    },
    "&:focus": {
      color: "#fff",
      ...transition2,
    },
  },
  alsoFindText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "15px",
    fontWeight: 400,
    paddingTop: "20px",
    ...transition2,
  },
  convertAgainText: {
    fontSize: "16px",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#0078d4",
    ...transitionText,
    "&:hover": {
      color: "#00acc1",
      cursor: "pointer",
    },
  },
  inputFile: {
    opacity: "0",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  inputFileWrapper: {
    "& button svg": {
      color: "inherit",
    },
  },
  htmlInFileIconContainer: {
    position: "absolute",
    fontFamily: "monospace",
    opacity: 0.7,
  },
  optionButtonPlaceholder: {
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "uppercase",
    color: "#888",
  },
  loadingText: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  loadingTextContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  circle: {
    stroke: "url(#linearColors)",
  },
  dragArea: {
    width: "100%",
    border: "2px dashed black",
    textAlign: "center",
    padding: "20px 0",
  },
  dragAreaContainer: {
    display: "flex",
    justifyContent: "center",
  },
  mainIconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  fileNameTitle: {
    fontWeight: 600,
    fontSize: "16px",
  },
  fileNameText: {
    fontWeight: 400,
    fontSize: "15px",
  },
  optionsContainer: {
    paddingTop: "10px",
    "&:hover": {
      cursor: "pointer",
    },
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
    borderRadius: "3px",
    border: "2px solid rgba(" + hexToRgb("#666") + ", 0.84)",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    borderRadius: "3px",
    border: "2px solid rgba(" + hexToRgb("#666") + ", .54)",
  },

  formControlLabelRoot: {
    marginRight: "0",
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
        background: "rgba(0, 0, 0, 0.6)",
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
      },
      "&:after": {
        background: "rgba(" + hexToRgb(primaryColor[0]) + ",.46)",
        ...transition2bg,
      },
    },
    selectFormControl: {
      margin: "10px 1px 10px 0px !important",
      "& > div": {
        "&:before": {
          borderBottomWidth: "1px !important",
          borderBottomColor: "#d2d2d2",
        },
        "&:after": {
          borderBottomColor: primaryColor[0] + "!important",
        },
      },
    },
    optionsText: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      ...transition2,
    },
    optionsTextIcon: {
      fontSize: "16px",
      fontWeight: "bold",
      position: "absolute",
      ...transition,
    },
    optionsTextIconFlipped: {
      fontSize: "16px",
      fontWeight: "bold",
      position: "absolute",
      ...transition,
      transform: "rotate(180deg) translateY(30%)",
    },
    checkboxLabel: {
      paddingLeft: "0",
      fontSize: "15px",
      lineHeight: "1.428571429",
      fontWeight: 400,
      display: "inline-flex",
      letterSpacing: "unset",
      ...transition2,
    },
    selectRoot: {
      ...transition2,
    },
    selectIcon: {
      ...transition2,
    },
    formLabelRoot: {
      ...transition2,
    },
    selectPaper: {
      ...transition2,
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
        background: "rgba(0, 0, 0, 0.6)",
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
      },
    },
    "&:after": {
      background: "rgba(" + hexToRgb("#222222") + ",.56)",
      ...transition2bg,
    },
    selectFormControl: {
      margin: "10px 1px 10px 0px !important",
      "& > div": {
        "&:before": {
          borderBottomWidth: "1px !important",
          borderBottomColor: "#666",
        },
        "&:after": {
          borderBottomColor: primaryColor[0] + "!important",
        },
      },
    },

    optionsText: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#aaa",
      ...transition2,
    },
    optionsTextIcon: {
      fontSize: "16px",
      fontWeight: "bold",
      position: "absolute",
      color: "#aaa",
      ...transition,
    },
    optionsTextIconFlipped: {
      fontSize: "16px",
      fontWeight: "bold",
      position: "absolute",
      transform: "rotate(180deg) translateY(30%)",
      color: "#aaa",
      ...transition,
    },

    checkboxLabel: {
      paddingLeft: "0",
      fontSize: "15px",
      lineHeight: "1.428571429",
      fontWeight: 400,
      display: "inline-flex",
      letterSpacing: "unset",
      color: "#AAA",
      ...transition2,
    },
    selectRoot: {
      color: "#ccc",
      ...transition2,
    },
    selectPaper: {
      color: "#ccc",
      backgroundColor: "#333",
      ...transition2,
    },
    selectIcon: {
      color: "#ccc",
      ...transition2,
    },
    formLabelRoot: {
      color: "#666",
    },
    ...fullInherit,
  });
