import { createStyles } from "@material-ui/core";
import { transition2bg } from "../html8pdf";

const shared = {
  asterisk: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    letterSpacing: "normal !important",
    WebkitTapHighlightColor: " rgba(255, 255, 255, 0)",
    boxSizing: "border-box",
    "&:focus": {
      outline: "none",
    },
  },
  body: {
    margin: "0",
    fontSize: "1rem",
    textAlign: "left",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: "1.5em",
  },
  hTags: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: "1.15em",
    color: "inherit",
  },
  paragraph: {
    fontSize: "14px",
    margin: "0 0 10px",
  },
  html: {
    fontFamily: "sans-serif",
    lineHeight: "1.15",
    WebkitTextSizeAdjust: "100%",
    MsTextSizeAdjust: "100%",
    MsOverflowStyle: "scrollbar",
    WebkitTapHighlightColor: "transparent",
  },
  anchor: {
    textDecoration: "none",
    backgroundColor: "transparent",
    "&:hover": {
      color: "#0078d4",
    },
    "&:focus": {
      color: "#0078d4",
    },
  },
  label: {
    fontSize: "14px",
    lineHeight: "1.42857",
    fontWeight: 400,
  },
  small: {
    fontSize: "75%",
    fontWeight: 400,
  },
  hr: {
    marginTop: "1rem",
    marginBottom: "1rem",
    border: "0",
    boxSizing: "content-box",
    height: "0",
    overflow: "visible",
  },
};
const sharedClasses = {
  "*": {
    ...shared.asterisk,
  },
  p: {
    ...shared.paragraph,
  },
  b: {
    fontWeight: 700,
    "& strong": {
      fontWeight: 700,
    },
  },
  html: {
    ...shared.html,
  },
  legend: {
    borderBottom: "0",
  },
  img: {
    verticalAlign: "middle",
    borderStyle: "none",
  },
  form: {
    marginBottom: "1.125rem",
  },
  ol: {
    marginTop: "0",
    marginBottom: "1rem",
  },
  ul: {
    marginTop: "0",
    marginBottom: "1rem",
  },
  dl: {
    marginTop: "0",
    marginBottom: "1rem",
  },
  ".btn-file": {
    position: "relative",
    overflow: "hidden",
    verticalAlign: "middle",
    "& input": {
      position: "absolute",
      top: "0",
      right: "0",
      width: "100%",
      height: "100%",
      margin: "0",
      fontSize: "23px",
      cursor: "pointer",
      filter: "alpha(opacity=0)",
      opacity: "0",
      direction: "ltr",
    },
  },
  ".fileinput": {
    textAlign: "center",
    display: "inline-block",
    marginBottom: "9px",
    "& input[type='file']": {
      display: "none",
    },
  },
  ".fileinput .form-control": {
    display: "inline-block",
    marginBottom: "0px",
    paddingTop: "7px",
    paddingBottom: "5px",
    verticalAlign: "middle",
    cursor: "text",
  },
  ".fileinput .thumbnail": {
    display: "inline-block",
    marginBottom: "10px",
    verticalAlign: "middle",
    overflow: "hidden",
    textAlign: "center",
    maxWidth: "360px",
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "& img": {
      maxHeight: "100%",
      width: "100%",
    },
  },
  ".fileinput .thumbnail.img-circle": {
    borderRadius: "50%",
    maxWidth: "100px",
  },
  ".fileinput .btn": {
    verticalAlign: "middle",
  },
  ".fileinput-exists .fileinput-new, .fileinput-new .fileinput-exists": {
    display: "none",
  },
  ".fileinput-inline .fileinput-controls": {
    display: "inline",
  },
  ".fileinput-filename": {
    display: "inline-block",
    overflow: "hidden",
    verticalAlign: "middle",
  },
  ".form-control .fileinput-filename": {
    verticalAlign: "bottom",
  },
  ".fileinput.input-group": {
    display: "table",
    "& *": {
      position: "relative",
      zIndex: 2,
    },
    "& .btn-file": {
      zIndex: 1,
    },
  },
  ".fileinput-new.input-group .btn-file, .fileinput-new .input-group .btn-file ": {
    borderRadius: "0 4px 4px 0",
  },
  ".fileinput-new.input-group .btn-file.btn-xs, .fileinput-new .input-group .btn-file.btn-xs, .fileinput-new.input-group .btn-file.btn-sm, .fileinput-new .input-group .btn-file.btn-sm": {
    borderRadius: "0 3px 3px 0",
  },
  ".fileinput-new.input-group .btn-file.btn-lg, .fileinput-new .input-group .btn-file.btn-lg": {
    borderRadius: "0 6px 6px 0",
  },
  ".form-group.has-warning .fileinput .fileinput-preview": {
    color: "#ff9800",
  },
  ".form-group.has-warning .fileinput .thumbnail": {
    color: "#ff9800",
  },
  ".form-group.has-error .fileinput .fileinput-preview": {
    color: "#f44336",
  },
  ".form-group.has-error .fileinput .thumbnail": {
    color: "#f44336",
  },
  ".form-group.has-success .fileinput .fileinput-preview": {
    color: "#4caf50",
  },
  ".form-group.has-success .fileinput .thumbnail": {
    color: "#4caf50",
  },
  ".thumbnail": {
    border: "0 none",
    borderRadius: "0",
    padding: "0",
  },
  "#images h4": {
    marginBottom: "30px",
  },
  "#root": {
    overflow: "hidden",
  },
};

export const lightStyles = () =>
  createStyles({
    "@global": {
      body: {
        ...shared.body,
        backgroundColor: "#eee",
        color: "#3c4858",
      },
      h1: {
        ...shared.hTags,
        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "3.3125rem",
      },
      h2: {
        ...shared.hTags,
        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "2.25rem",
      },
      h3: {
        ...shared.hTags,

        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "1.5625rem",
      },
      h4: {
        ...shared.hTags,

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "1.125rem",
      },
      h5: {
        ...shared.hTags,

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "1.0625rem",
      },
      h6: {
        ...shared.hTags,

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "0.75rem",
        textTransform: "uppercase",
      },

      a: {
        ...shared.anchor,
        color: "inherit",
      },
      label: {
        ...shared.label,
        color: "#aaaaaa",
      },
      small: {
        ...shared.small,
        color: "#777",
      },

      hr: {
        ...shared.hr,
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
      },
      ...sharedClasses,
    },
  });

export const darkStyles = () =>
  createStyles({
    "@global": {
      body: {
        ...shared.body,
        backgroundColor: "#121212",
        color: "#a9a9a9",
      },
      h1: {
        ...shared.hTags,
        color: "#eee",
        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "3.3125rem",
      },
      h2: {
        ...shared.hTags,
        color: "#eee",

        marginTop: "20px",
        marginBottom: "10px",
        fontSize: "2.25rem",
      },
      h3: {
        ...shared.hTags,

        color: "#eee",
        marginTop: "20px",

        marginBottom: "10px",
        fontSize: "1.5625rem",
      },
      h4: {
        ...shared.hTags,
        color: "#eee",

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "1.125rem",
      },
      h5: {
        ...shared.hTags,
        color: "#eee",

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "1.0625rem",
      },
      h6: {
        ...shared.hTags,
        color: "#eee",

        marginTop: "10px",
        marginBottom: "10px",
        fontSize: "0.75rem",
        textTransform: "uppercase",
      },

      a: {
        ...shared.anchor,
        color: "#fff",
      },
      label: {
        ...shared.label,
        color: "#eeeeee",
      },
      small: {
        ...shared.small,
        color: "#777",
      },

      hr: {
        ...shared.hr,
        borderTop: "1px solid rgba(100, 100, 100, 0.1)",
      },
      ...sharedClasses,
    },
  });
