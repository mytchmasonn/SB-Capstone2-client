import React, { useState, useEffect } from "react";
import classNames from "classnames";

import useWindowSize from "lib/hooks/useWindowSize";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

export default function FileList({
  classes,
  file,
  firstFile,
  lastFile,
  filePosition,
}) {
  const [truncatedLength, setTruncatedLength] = useState(0);
  const { width } = useWindowSize();
  console.log(file);
  const baseUrl =
    process.env.PROD_TYPE === "production"
      ? "https://api.html8pdf.com"
      : "http://localhost:8000";
  // Remove time from filename
  const rawFileName = file.file_name;
  const fileName = rawFileName.slice(14);
  const fileNameNoExt = fileName.slice(0, -4);

  // parse through date
  const rawTime = Math.floor(file.created_at);
  const dateTime = new Date(rawTime).toLocaleString();
  const createdDate = dateTime.split(",")[0];
  const createdTime = dateTime.split(",")[1].slice(0, -6);
  const createdAmPm = dateTime.slice(-2);

  // give first and last files special border radius
  const fileBarClass =
    filePosition % 2 !== 0 ? classes.fileBarDiv1 : classes.fileBarDiv2;
  const firstElementClass =
    file.id === firstFile
      ? classes.fileBarDivWithTopRadius
      : classes.fileBarDivNoRadius;
  const lastElementClass =
    file.id === lastFile
      ? classes.fileBarDivWithBottomRadius
      : classes.fileBarDivNoRadius;

  // truncate file name
  useEffect(() => {
    switch (true) {
      case width <= 600 && fileNameNoExt.length > 18:
        setTruncatedLength(18);
        break;
      case width > 600 && width <= 960 && fileNameNoExt.length > 30:
        setTruncatedLength(30);
        break;
      case width > 960 && width <= 1280 && fileNameNoExt.length > 45:
        setTruncatedLength(45);
        break;
      case width > 1280 && fileNameNoExt.length > 60:
        setTruncatedLength(45);
        break;
      default:
        setTruncatedLength(100);
        break;
    }
  }, [width]);
  return (
    <React.Fragment>
      <div
        className={classNames(
          fileBarClass,
          firstElementClass,
          lastElementClass
        )}
      >
        <a href={`${baseUrl}/files/get-file/${rawFileName}`}>
          <GridContainer>
            <GridItem xs={8}>
              <div className={classes.fileTitleText}>
                {truncatedLength < 100
                  ? fileNameNoExt.slice(0, truncatedLength) + "..."
                  : fileNameNoExt}
              </div>
            </GridItem>
            <GridItem xs={4}>
              <div className={classes.timeContainer}>
                <span style={{ fontWeight: 400 }}>{createdDate}</span>
                <br />
                <span style={{ fontSize: "12px" }}>
                  {createdTime + " " + createdAmPm}
                </span>
              </div>
            </GridItem>
          </GridContainer>
        </a>
      </div>
    </React.Fragment>
  );
}
