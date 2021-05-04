import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const shared = createStyles({
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important",
    },
  },
  underlineError: {
    "&:after": {
      borderBottomColor: dangerColor[0],
    },
  },
  underlineSuccess: {
    "&:after": {
      borderBottomColor: successColor[0],
    },
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAA",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px",
    },
  },
  labelRootError: {
    color: dangerColor[0] + " !important",
  },
  labelRootSuccess: {
    color: successColor[0] + " !important",
  },
  feedback: {
    position: "absolute",
    bottom: "4px",
    right: "0",
    zIndex: 2,
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none",
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#fff",
      opacity: "1",
    },
  },
});

export const lightStyles = () =>
  createStyles({
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderBottomColor: "#D2D2D2",
        borderBottomWidth: "1px !important",
      },
      "&:after": {
        borderBottomColor: primaryColor[0],
      },
    },
    formControl: {
      margin: "0 0 17px 0",
      paddingTop: "27px",
      position: "relative",

      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
        color: "#495057",
      },
    },
    whiteUnderline: {
      "&:hover:not($disabled):before,&:before": {
        borderBottomColor: "#fff",
      },
      "&:after": {
        borderBottomColor: "#fff",
      },
    },
    input: {
      color: "#495057",
      height: "unset",
      "&,&::placeholder": {
        fontSize: "14px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: "1.42857",
        opacity: "1",
      },
      "&::placeholder": {
        color: "#AAA",
      },
    },
    ...shared,
  });

export const darkStyles = () =>
  createStyles({
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderBottomColor: "#666",
        borderBottomWidth: "1px !important",
      },
      "&:after": {
        borderBottomColor: primaryColor[0],
      },
    },

    formControl: {
      margin: "0 0 17px 0",
      paddingTop: "27px",
      position: "relative",
      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
        color: "#888",
      },
    },
    whiteUnderline: {
      "&:hover:not($disabled):before,&:before": {
        borderBottomColor: "#fff",
      },
      "&:after": {
        borderBottomColor: "#fff",
      },
    },
    input: {
      color: "#eee",
      height: "unset",
      "&,&::placeholder": {
        fontSize: "14px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: "1.42857",
        opacity: "1",
      },
      "&::placeholder": {
        color: "#888",
      },
    },
    ...shared,
  });
