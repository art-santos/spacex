import { gql } from "@apollo/client";

const HOME_QUERY = gql`
{
  launches(sort: "mission_name", limit: 8) {
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

export default HOME_QUERY;
