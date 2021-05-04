import { container, title, transition2bg } from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const shared = createStyles({
  container: {
    color: "#fff",
    ...container,
    zIndex: 2,
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  mainRaised: {
    "@media (max-width: 576px)": {
      marginTop: "-30px",
    },
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px",
    },
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: 500,
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  section: {
    padding: "20px 0",
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  loadingContactFormContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "80px 0",
  },
  circle: {
    stroke: "url(#linearColors)",
  },
  parallaxTitleContainer: {
    zIndex: 1,
  },
  parallaxTitle: {
    fontSize: "50px",
    textAlign: "center",
    fontWeight: 500,
    color: "#eee",
  },
  parallaxTitleHtml: {
    color: "#0078d4",
  },
  parallaxTitlePdf: {
    color: "#666",
    fontSize: "48px",
  },
});
export const lightStyles = () =>
  createStyles({
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      color: "#333",
      textDecoration: "none",
      textAlign: "center",
    },

    main: {
      background: "#fff",
      position: "relative",
      zIndex: 3,
      ...transition2bg,
    },
    description: {
      color: "#777",
      textAlign: "center",
      fontWeight: 400,
    },
    ...shared,
  });
export const darkStyles = () =>
  createStyles({
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      color: "#ddd",
      textDecoration: "none",
      textAlign: "center",
    },
    main: {
      background: "#222222",
      position: "relative",
      zIndex: 3,
      ...transition2bg,
    },
    description: {
      color: "#999",
      textAlign: "center",
      fontWeight: 400,
    },
    ...shared,
  });
