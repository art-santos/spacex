import { gql } from "@apollo/client";

const LAUNCH_QUERY = (params) => gql`
      query LaunchQuery{
        launch(id: "${params.id}") {
          launch_date_utc
          id
          mission_id
          mission_name
          launch_year
          details
          links {
            article_link
            flickr_images
            mission_patch
            presskit
            video_link
            wikipedia
          }
          rocket {
            rocket {
              id
              name
              cost_per_launch
              
              diameter {
                feet
                meters
              }
              engines {
                type
                version
                thrust_vacuum {
                  kN
                  lbf
                }
                propellant_1
                propellant_2
              }
              height {
                feet
                meters
              }
              mass {
                kg
                lb
              }
              payload_weights {
                kg
                lb
              }
            }
            second_stage {
              payloads {
                id
                nationality
                customers
                payload_type
              }
            }
          }
          launch_site {
            site_name
            site_id
          }
        }
      }
`;

export default LAUNCH_QUERY;
