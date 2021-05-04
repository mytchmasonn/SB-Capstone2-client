//@ts-nocheck
import React from "react";

import { MdClose } from "react-icons/md";
import { Dialog, AppBar, Toolbar, IconButton } from "@material-ui/core";

import SlideTransition from "components/Transitions/SlideTransition";

import Tos from "views/Policies/TOS";

export default function SignUpPage(props) {
  const { openTos, setOpenTos, classes } = props;
  return (
    <Dialog
      fullScreen
      open={openTos}
      onClose={() => setOpenTos(false)}
      TransitionComponent={SlideTransition}
      classes={{ paper: classes.dialogPaper }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpenTos(false)}
            aria-label="close"
          >
            <MdClose size={22} />
          </IconButton>
          <h6 className={classes.title}>
            Terms of Service {"&"} Privacy Policy
          </h6>
        </Toolbar>
      </AppBar>
      <Tos />
    </Dialog>
  );
}
