import React from "react";

import { MdCheck } from "react-icons/md";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormControlLabel,
  Checkbox,
  Collapse,
} from "@material-ui/core";

export default function AdvancedOptions(props) {
  const {
    classes,
    openOptions,
    checkedBackground,
    setCheckedBackground,
    isPdfFormat,
    setIsPdfFormat,
    isPageLandscape,
    setIsPageLandscape,
  } = props;
  return (
    <React.Fragment>
      <div>
        <Collapse in={openOptions}>
          <div className={classes.optionsAreaContainer}>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel classes={{ root: classes.formLabelRoot }}>
                Format
              </InputLabel>
              <Select
                classes={{
                  root: classes.selectRoot,
                  icon: classes.selectIcon,
                }}
                MenuProps={{
                  classes: { paper: classes.selectPaper },
                }}
                value={isPdfFormat}
                onChange={(e) => setIsPdfFormat(e.target.value)}
              >
                <MenuItem value={0}>Letter (8.5in x 11in)</MenuItem>
                <MenuItem value={1}>Legal (8.5in x 14in)</MenuItem>
                <MenuItem value={2}>Tabloid (11in x 17in)</MenuItem>
                <MenuItem value={3}>Ledger (17in x 11in)</MenuItem>
                <MenuItem value={4}>A0 (33.1in x 46.8in)</MenuItem>
                <MenuItem value={5}>A1 (23.4in x 33.1in)</MenuItem>
                <MenuItem value={6}>A2 (16.54in x 24.4in)</MenuItem>
                <MenuItem value={7}>A3 (11.7in x 16.54in)</MenuItem>
                <MenuItem value={8}>A4 (8.27in x 11.7in)</MenuItem>
                <MenuItem value={9}>A5 (5.83in x 8.27in)</MenuItem>
                <MenuItem value={10}>A6 (4.13in x 5.83in)</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel classes={{ root: classes.formLabelRoot }}>
                Orientation
              </InputLabel>
              <Select
                classes={{
                  root: classes.selectRoot,
                  icon: classes.selectIcon,
                }}
                MenuProps={{
                  classes: { paper: classes.selectPaper },
                }}
                value={isPageLandscape}
                onChange={(e) => setIsPageLandscape(e.target.value)}
              >
                <MenuItem value={0}>Portrait (Default)</MenuItem>
                <MenuItem value={1}>Landscape</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              classes={{
                root: classes.formControlLabelRoot,
              }}
              label=""
              control={
                <Checkbox
                  onClick={() => setCheckedBackground(!checkedBackground)}
                  checkedIcon={
                    <MdCheck size={22} className={classes.checkedIcon} />
                  }
                  icon={<MdCheck size={22} className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot,
                  }}
                  checked={checkedBackground}
                />
              }
            />
            <span className={classes.checkboxLabel}>Print Background</span>
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
