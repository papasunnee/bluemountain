import gql from "graphql-tag";

export const REGISTER_CONSULTANT = gql`
mutation regCon(
  $name: String,
  $phone: String,
  $email: String,
  $public_id: String,
  $version: Float,
  $signature: String,
  $format: String,
  $resource_type: String,
  $url: String,
  $width: Float,
  $height: Float,
  $secure_url: String
) {
  registerConsultant(
    record: {
      name: $name,
      phone: $phone,
      email: $email,
      cvFile: {
        public_id: $public_id,
        version: $version,
        signature: $signature,
        format: $format,
        resource_type: $resource_type,
        url: $url,
        width: $width,
        height: $height,
        secure_url: $secure_url,
      }
    }
  ) {
    recordId
    record {
      name
      email
    }
  }
}
`
export const REGISTER_CANDIDATE = gql`
  mutation regC(
    $firstName: String,
    $lastName: String,
    $email: String,
    $message: String,
    $public_id: String,
    $version: Float,
    $signature: String,
    $format: String,
    $resource_type: String,
    $url: String,
    $width: Float,
    $height: Float,
    $secure_url: String
  ) {
    registerCandidate(
      record: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        message: $message
        cvFile: {
          public_id: $public_id,
          version: $version,
          signature: $signature,
          format: $format,
          resource_type: $resource_type,
          url: $url,
          width: $width,
          height: $height,
          secure_url: $secure_url,
        }
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

export const REGISTER_ORGANIZATION = gql`
  mutation regOrg(
    $name: String,
    $email: String,
    $message: String
    $service: EnumOrganizationServices,
    $country: EnumOrganizationCountry,
    $companySize: EnumOrganizationStaffSize,
  ) {
    registerOrganization(
      record: {
        name: $name,
        email: $email,
        message: $message,
        country: $country,
        services: $service,
        staffSize: $companySize
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
