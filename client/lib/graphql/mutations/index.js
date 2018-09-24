import gql from "graphql-tag";

export const CREATE_CANDIDATE = gql`
  mutation regC(
    $firstName: String
    $lastName: String
    $email: String
    $message: String
  ) {
    registerCandidate(
      record: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        message: $message
        # cvFile: {
        #   public_id:
        # }
      }
    ) {
      recordId
      record {
        name
        email
      }
    }
  }
`;
