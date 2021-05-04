import React from "react";
import { makeStyles } from "@material-ui/core";

import styles from "assets/jss/html8pdf/components/Misc/htmlInFileIconStyle";

const useStyles = makeStyles(styles);

const HTMLInFileIcon = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.htmlInFileIconContainer}>
      <span className={classes.htmlTagSpanContainer}>
        <span>{"<"}</span>
        <span className={classes.htmlTagSpanText}>{"html"}</span>
        <span>{">"}</span>
      </span>

      <span className={classes.bodyTagSpanContainer}>
        <span>{"<"}</span>
        <span className={classes.htmlTagSpanText}>{"body"}</span>
        <span>{">"}</span>
      </span>
      <span className={classes.h1TagSpanContainer}>
        <span>{"<"}</span>
        <span className={classes.htmlTagSpanText}>{"h1"}</span>
        <span>{">"}</span>
      </span>
      <span className={classes.hiText}>hi</span>
      <span className={classes.hiUsernameText}>{user.name}!</span>

      <span style={{}}>
        <span>{"</"}</span>
        <span className={classes.htmlTagSpanText}>{"h1"}</span>
        <span>{">"}</span>
      </span>
      <span className={classes.bodyClosingTagSpanContainer}>
        <span>{"</"}</span>
        <span className={classes.htmlTagSpanText}>{"body"}</span>
        <span>{">"}</span>
      </span>

      <span className={classes.htmlClosingTagSpanContainer}>
        <span>{"</"}</span>
        <span className={classes.htmlTagSpanText}>{"html"}</span>
        <span>{">"}</span>
      </span>
    </div>
  );
};

export default HTMLInFileIcon;
