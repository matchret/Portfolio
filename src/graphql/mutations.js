/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSender = /* GraphQL */ `
  mutation CreateSender(
    $input: CreateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    createSender(input: $input, condition: $condition) {
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
export const updateSender = /* GraphQL */ `
  mutation UpdateSender(
    $input: UpdateSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    updateSender(input: $input, condition: $condition) {
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
export const deleteSender = /* GraphQL */ `
  mutation DeleteSender(
    $input: DeleteSenderInput!
    $condition: ModelSenderConditionInput
  ) {
    deleteSender(input: $input, condition: $condition) {
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
