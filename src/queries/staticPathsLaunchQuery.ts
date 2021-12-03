import { gql } from "@apollo/client";

const STATIC_PATHS_QUERY = gql`
query StaticPathsQuery {
    launches {
      id
    }
}
`;

export default STATIC_PATHS_QUERY;
