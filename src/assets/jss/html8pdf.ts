const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const drawerWidth = 260;

const primaryColor = ["#0078d4", "#004578", "#005a9e", "#106ebe", "#2b88d8"];
const secondaryColor = ["#fafafa"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#fcf8e3"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#f2dede"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#dff0d8"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#d9edf7"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};
const transitionText = {
  transition: "all 0.19s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};
const transition2 = {
  transition: "all 0.30s cubic-bezier(0.0, 0.0, 1.0, 1.0)",
};
const transition2bg = {
  transition: "all 0.5s cubic-bezier(0.0, 0.0, 1.0, 1.0)",
};
const transitionBW = {
  transition: "all 0.9s cubic-bezier(0.0, 0.0, 1.0, 1.0)",
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: "1.5em",
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};
const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.2)",
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(infoColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(infoColor[0]) +
    ", 0.2)",
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.2)",
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(warningColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(warningColor[0]) +
    ", 0.2)",
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.2)",
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(" +
    hexToRgb("#000") +
    ", 0.14), 0 7px 10px -5px rgba(" +
    hexToRgb(roseColor[0]) +
    ", 0.4)",
};

const warningCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")",
  ...warningBoxShadow,
};
const successCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")",
  ...successBoxShadow,
};
const dangerCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")",
  ...dangerBoxShadow,
};
const infoCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")",
  ...infoBoxShadow,
};
const primaryCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")",
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")",
  ...roseBoxShadow,
};
const darkerCardHeader = {
  color: "#fff",
  background:
    "linear-gradient(60deg, " + primaryColor[1] + ",  #003778, #004578)",
  ...boxShadow,
};
const transparentCardHeader = {
  color: "#fff",
  background: "transparent",
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const title = {
  textDecoration: "none",
  fontWeight: 600,
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto", "Times New Roman", serif`,
};

const cardTitle = {
  "&, & a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto",
  },
};

const description = {
  color: "#999",
};

const mlAuto = {
  marginLeft: "auto",
};

const mrAuto = {
  marginRight: "auto",
};

export {
  //variables
  drawerWidth,
  transition,
  transitionText,
  transition2,
  transition2bg,
  transitionBW,
  container,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  transparentCardHeader,
  darkerCardHeader,
  cardHeader,
  title,
  cardTitle,
  description,
  mlAuto,
  mrAuto,
  hexToRgb,
};
