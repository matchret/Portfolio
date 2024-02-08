/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSender = /* GraphQL */ `
  query GetSender($id: ID!) {
    getSender(id: $id) {
      id
      name
      email
      phone
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSenders = /* GraphQL */ `
  query ListSenders(
    $filter: ModelSenderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        message
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
