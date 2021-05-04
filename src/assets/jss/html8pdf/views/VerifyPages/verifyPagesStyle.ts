import { createStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    containerNoFlex: {
      zIndex: 2,
      position: "relative",
      paddingTop: "15vh",
      color: "#fff",
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingBottom: "0px",
      width: "100%",
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
        background: "rgba(0, 0, 0, 0.6)",
      },
      "&:after": {
        background: "rgba(34, 34, 34, 0.9)",
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
    loadingContactFormContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "30vh 0",
    },
    circle: {
      stroke: "url(#linearColors)",
    },
    textTitleContainer: {
      display: "flex",
      justifyContent: "center",
      color: "#eee",
    },
    textSubtitleContainer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "20px",
      color: "#eee",
    },
  });
export default styles;
