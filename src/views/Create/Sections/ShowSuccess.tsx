import React from "react";
import Button from "components/CustomButtons/Button";

export default function ShowSuccess(props) {
  const { classes, linkToDownload, handleConvertAgain } = props;
  const baseUrl =
    process.env.PROD_TYPE === "production"
      ? "https://api.html8pdf.com"
      : "http://localhost:8000";
  return (
    <div>
      <h2 className={classes.cardTitle}>Success!</h2>

      <div className={classes.textCenter}>
        <Button
          color="success"
          round
          href={`${baseUrl}/files/get-file/${linkToDownload}`}
        >
          <span className={classes.anchorMod}>Download PDF</span>
        </Button>
      </div>
      <span className={classes.alsoFindText}>
        You can also find a link to download at any time your account page!
      </span>
      <br />
      <div className={classes.textCenter}>
        <span className={classes.convertAgainText} onClick={handleConvertAgain}>
          Convert Again?
        </span>
      </div>
    </div>
  );
}
