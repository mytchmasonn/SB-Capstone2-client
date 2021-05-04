import {
  primaryColor,
  transition2,
  transition2bg,
  hexToRgb,
} from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core/styles";

const shared = createStyles({
  containerNoFlex: {
    zIndex: 2,
    paddingLeft: "15px",
    paddingBottom: "0px",
    width: "100%",
    position: "relative",
    paddingTop: "15vh",
    paddingRight: "15px",
    color: "#fff",
    ...transition2,
  },
  tableHeaderText: {
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "bold",
    ...transition2,
  },
  fileBarDiv1: {
    backgroundColor: "rgba(0, 120, 212, 0.3)",
    ...transition2,
  },
  fileBarDiv2: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    ...transition2,
  },
  fileBarDivWithTopRadius: {
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
  },
  fileBarDivWithBottomRadius: {
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
  },
  fileBarDivWithNoRadius: {
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  fileBarDiv1Skeleton: {
    height: 49,
    backgroundColor: "rgba(0, 120, 212, 0.3)",
    ...transition2,
  },
  fileBarDiv2Skeleton: {
    height: 49,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    ...transition2,
  },
  skeletonTitleContainer: {
    paddingLeft: "5px",
    paddingTop: "8px",
  },
  skeletonDateContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "8px",
  },
  skeletonTimeContainer: {
    display: "flex",
    justifyContent: "center",
  },
  cardWrapper: {
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);",
    ...transition2,
  },
  "@keyframes wave": {
    "0%": {
      transform: "translateX(-100%)",
    },
    "60%": {
      transform: "translateX(100%)",
    },
    "100%": {
      transform: "translateX(100%)",
    },
  },
});

export const lightStyles = () =>
  createStyles({
    ...shared,
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
      "&:after": {
        background: "rgba(" + hexToRgb(primaryColor[0]) + ",.46)",
        ...transition2bg,
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
    timeContainer: {
      color: "#444",
      textAlign: "center",
      ...transition2,
    },
    fileTitleText: {
      color: "#111",
      fontSize: "18px",
      fontWeight: 400,
      paddingLeft: "8px",
      paddingTop: "10px",
      textTransform: "uppercase",
      ...transition2,
    },
    fileBarContainer: {
      border: "3px solid rgba(0, 0, 0, 0.4)",
      borderRadius: "10px",
      zIndex: 3,
      ...transition2,
    },
    skeletonRoot: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
    skeletonWave: {
      position: "relative",
      overflow: "hidden",
      "&::after": {
        animation: "$wave 1.6s linear 0.5s infinite",
        content: '""',
        position: "absolute",
        transform: "translateX(-100%)",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        background: `linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.07), transparent)`,
      },
    },
    needNewVerificationEmail: {
      textAlign: "center",
      fontWeight: 500,
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
        color: "#0078d4",
      },
    },
    needNewVerificationEmailContainer: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "14px",
    },
    emailNotVerifiedText: {
      textAlign: "center",
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: "11px",
    },
    progress: {
      zIndex: 3,
      display: "flex",
      justifyContent: "center",
    },
  });
export const darkStyles = () =>
  createStyles({
    ...shared,
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
      "&:after": {
        ...transition2bg,
        background: "rgba(" + hexToRgb("#222222") + ",.56)",
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
    timeContainer: {
      textAlign: "center",
      ...transition2,
      color: "#ccc",
    },
    fileTitleText: {
      fontSize: "18px",
      fontWeight: 400,
      paddingLeft: "8px",
      paddingTop: "10px",
      textTransform: "uppercase",
      color: "#ccc",
      ...transition2,
    },
    fileBarContainer: {
      border: "3px solid rgba(100, 100, 100, 0.4)",

      borderRadius: "10px",
      zIndex: 3,
      ...transition2,
    },
    skeletonRoot: {
      backgroundColor: "rgba(100, 100, 100, 0.41)",
    },
    skeletonWave: {
      position: "relative",
      overflow: "hidden",
      "&::after": {
        animation: "$wave 1.6s linear 0.5s infinite",
        content: '""',
        position: "absolute",
        transform: "translateX(-100%)",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        background: `linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)`,
      },
    },
    needNewVerificationEmail: {
      textAlign: "center",
      fontWeight: 500,
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
        color: "#0078d4",
      },
    },
    needNewVerificationEmailContainer: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: 500,
      fontSize: "14px",
    },
    emailNotVerifiedText: {
      textAlign: "center",
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: "11px",
    },
    progress: {
      zIndex: 3,
      display: "flex",
      justifyContent: "center",
    },
  });
