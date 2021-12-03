import { gql } from "@apollo/client";

const LOAD_MORE_QUERY = gql`
  query Launches($limit: Int, $offset: Int, $mission: String, $rocket: String) {
    launches(limit: $limit, offset: $offset, sort: "mission_name", find: {mission_name: $mission, rocket_name: $rocket}) {
    mission_name
    launch_year
    launch_success
    mission_id
    id
    links {
      mission_patch
      flickr_images
    }
    rocket {
      rocket_name
      second_stage {
        payloads {
          payload_type
        }
      }
      rocket {
        mass {
          lb
        }
      }
    }
  }
}

`;

export default LOAD_MORE_QUERY;
