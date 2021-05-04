import { createStyles } from "@material-ui/styles";

const styles = createStyles({
  htmlInFileIconContainer: {
    position: "absolute",
    fontFamily: "monospace",
    opacity: 0.7,
  },
  htmlTagSpanContainer: {
    position: "absolute",
    top: "13px",
    right: "-2.5px",
  },
  htmlClosingTagSpanContainer: {
    position: "absolute",
    top: "88px",
    right: "-10px",
  },
  htmlTagSpanText: {
    color: "rgb(0,120,215)",
    fontWeight: 600,
  },
  bodyTagSpanContainer: {
    position: "absolute",
    top: "26px",
    right: "-7px",
  },
  bodyClosingTagSpanContainer: {
    position: "absolute",
    top: "75px",
    right: "-15px",
  },
  h1TagSpanContainer: {
    position: "absolute",
    top: "38px",
    right: "-3px",
  },
  h1ClosingTagSpanContainer: {
    position: "absolute",
    top: "62px",
    right: "-9px",
  },
  hiText: {
    position: "absolute",
    top: "50px",
    right: "3px",
    fontSize: "10px",
  },
  hiUsernameText: {
    position: "absolute",
    top: "50px",
    right: "-37px",
    fontSize: "10px",
  },
});

export default styles;
