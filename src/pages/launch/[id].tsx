import LaunchPage from "components/Templates/LaunchPage";
import client from "queries/apolloClient";
import LAUNCH_QUERY from "queries/launchQuery";
import HeadDefault from "components/atoms/seo/Head";

export async function getServerSideProps(context) {
  const id = context.query;
  const { data } = await client.query({
    query: LAUNCH_QUERY(id),
  });
  
    return {
    props: {
      data
    },
  };
} 


const Launch = ({ data }) => {
  return (
  <>
    <HeadDefault 
    title={data.launch.mission_name}
    description={data.launch.details}
    image={data.launch.links.flickr_images[0] ? data.launch.links.flickr_images[0] : data.launch.links.mission_patch}
    />
    <LaunchPage data={data} />
  </>
  );
};

export default Launch;

