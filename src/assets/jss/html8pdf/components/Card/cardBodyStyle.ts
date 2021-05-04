import { hexToRgb } from "assets/jss/html8pdf";
import { createStyles } from "@material-ui/core";

const cardBodyStyle = () =>
  createStyles({
    cardBody: {
      padding: "0.9375rem 1.875rem",
      flex: "1 1 auto",
      WebkitBoxFlex: 1,
    },
    cardBodyBackground: {
      position: "relative",
      zIndex: 2,
      minHeight: "280px",
      paddingTop: "40px",
      paddingBottom: "40px",
      maxWidth: "440px",
      margin: "0 auto",
    },
    cardBodyPlain: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
    cardBodyFormHorizontal: {
      paddingLeft: "15px",
      paddingRight: "15px",
      "& form": {
        margin: "0",
      },
    },
    cardPricing: {
      padding: "15px!important",
      margin: "0px!important",
    },
    cardSignup: {
      padding: "0px 30px 0px 30px",
    },
    cardBodyColor: {
      borderRadius: "6px",
      "& h1,& h2,& h3": {
        "& small": {
          color: "rgba(" + hexToRgb("#fff") + ", 0.8)",
        },
      },
    },
    cardBodyNoPad: {
      padding: "0",
    },
  });

export default cardBodyStyle;
