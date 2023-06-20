/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmailMeassage = /* GraphQL */ `
  query GetEmailMeassage($id: ID!) {
    getEmailMeassage(id: $id) {
      id
      name
      email
      messge
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmailMeassages = /* GraphQL */ `
  query ListEmailMeassages(
    $filter: ModelEmailMeassageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailMeassages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        messge
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
