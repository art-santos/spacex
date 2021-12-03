import HomePage from "components/Templates/HomePage";
import client from "../queries/apolloClient";
import HOME_QUERY from "queries/homeQuery";
import React from "react";
import { Head } from "next/document";
import HeadDefault from "components/atoms/seo/Head";
import TypeSearchProvider from "context/TypeSearchContext";
import QueryProvider from "context/QueryContext";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const Home = ({ launches }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeadDefault
        title="Launches"
        description={`See all SpaceX launches like ${launches[0].mission_name}`}
        image={launches[0].links.flickr_images[0]}
      />
      <QueryProvider>
        <TypeSearchProvider>
          <HomePage data={launches} />
        </TypeSearchProvider>
      </QueryProvider>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: HOME_QUERY,
  });

  return {
    props: {
      launches: data.launches,
    },
  };
}
