import { title } from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    contentCenter: {
      position: "absolute",
      top: "50%",
      left: "50%",
      zIndex: 3,
      transform: "translate(-50%,-50%)",
      textAlign: "center",
      color: "#fff",
      padding: "0 15px",
      width: "100%",
      maxWidth: "880px",
    },
    title: {
      ...title,
      fontSize: "13.7em",
      color: "#fff",
      letterSpacing: "14px !important",
      fontWeight: 700,
    },
    subTitle: {
      fontSize: "2.25rem",
      marginTop: "0",
      marginBottom: "8px",
    },
    description: {
      fontSize: "1.125rem",
      marginTop: "0",
      marginBottom: "8px",
    },
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
      },
    },
  });

export default styles;
