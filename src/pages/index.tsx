import HomePage from "components/Templates/HomePage";
import React from "react";
import HeadDefault from "components/atoms/seo/Head";
import TypeSearchProvider from "context/TypeSearchContext";
import QueryProvider from "context/QueryContext";

const Home = () => {
  return (
    <>
      <HeadDefault
        title="Launches"
        description={`See all SpaceX launches`}
        image="/spacex-logo.png"
      />
      <QueryProvider>
        <TypeSearchProvider>
          <HomePage />
        </TypeSearchProvider>
      </QueryProvider>
    </>
  );
};

export default Home;
