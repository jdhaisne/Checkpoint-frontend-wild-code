import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
        id
        code
        name
        emoji
        continent {
            id
            name
          }
  }
}
`;

export const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
        id
        code
        name
        emoji
        continent {
            id
            name
          }
  }
}
`;
