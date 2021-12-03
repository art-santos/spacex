import React from "react";

import LaunchLinkContainer from "components/atoms/launch/LaunchLinkContainer";
import LaunchLink from "../atoms/launch/LaunchLink";

const LaunchLinkFactory = ({data}) => {
  const { links } = data.launch

  return (
    <LaunchLinkContainer>
      {links.wikipedia && (
        <LaunchLink data={links.wikipedia} source="wikipedia" />
      )}
      {links.article_link && (
        <LaunchLink data={links.article_link} source="spacex" />
      )}
      {links.presskit && <LaunchLink data={links.presskit} source="pdf" />}
    </LaunchLinkContainer>
  );
};

export default LaunchLinkFactory
