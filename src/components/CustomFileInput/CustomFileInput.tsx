import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button";
import CustomInput from "components/CustomInput/CustomInput";

import styles from "assets/jss/html8pdf/components/CustomInputs/customFileInputStyle";

const useStyles = makeStyles(styles);

export default function CustomFileInput(props) {
  const [fileNames, setFileNames] = useState("");
  const [files, setFiles] = useState(null);

  let hiddenFile: any = createRef();

  const addFile = (e) => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (props.multiple && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    setFiles(files);
    setFileNames(fileNames);
    if (props.onChange) {
      props.onChange(files, fileNames);
    }
  };
  const {
    id,
    endButton,
    startButton,
    labelText,
    inputProps,
    formControlProps,
    multiple,
  } = props;
  const classes = useStyles();
  if (inputProps && inputProps.type && inputProps.type === "file") {
    inputProps.type = "text";
  }
  let buttonStart;
  let buttonEnd;
  if (startButton) {
    buttonStart = (
      <Button {...startButton.buttonProps}>
        {startButton.icon !== undefined ? startButton.icon : null}
        {startButton.text !== undefined ? startButton.text : null}
      </Button>
    );
  }
  if (endButton) {
    buttonEnd = (
      <Button {...endButton.buttonProps}>
        {endButton.icon !== undefined ? endButton.icon : null}
        {endButton.text !== undefined ? endButton.text : null}
      </Button>
    );
  }
  return (
    <div className={classes.inputFileWrapper}>
      <input
        type="file"
        className={classes.inputFile}
        multiple={multiple}
        ref={hiddenFile}
        onChange={addFile}
      />
      <CustomInput
        id={id}
        labelText={labelText}
        formControlProps={{ ...formControlProps }}
        inputProps={{
          ...inputProps,
          onClick: (e) => hiddenFile.current.click(e),
          value: fileNames,
          endAdornment: buttonEnd,
          startAdornment: buttonStart,
        }}
      />
    </div>
  );
}

CustomFileInput.defaultProps = {
  multiple: false,
};

CustomFileInput.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string,
  endButton: PropTypes.object,
  startButton: PropTypes.object,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
};
