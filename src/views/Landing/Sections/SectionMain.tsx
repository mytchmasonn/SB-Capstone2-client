import React from "react";

import { MdBuild, MdDone, MdLink } from "react-icons/md";

import GridItem from "components/Grid/GridItem";
import InfoArea from "components/InfoArea/InfoArea";
import GridContainer from "components/Grid/GridContainer";

export default function SectionProduct({ classes }) {
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>HTML8PDF</h2>
          <h5 className={classes.description}>
            HTML8PDF is a tool to turn virtually any webpage into a PDF to
            download!
            <br />
            <br />
            HTML8PDF works similar to a webscraper, meaning it will wait for the
            entire page to load before downloading, which ensures that even
            pages generated solely from Javascript (i.e. SPA) will still display
            correctly!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Step One"
              description="Provide a URL to any site you'd like to convert. Remember to grab the full url!"
              icon={MdLink}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Step Two"
              description="Our server goes out and fetches the page, then converts it to a PDF and presents you with a download button."
              icon={MdBuild}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Step Three"
              description="Enjoy! You'll also have a list of all your conversions on your account page, should you want to download a previous conversion again!"
              icon={MdDone}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
