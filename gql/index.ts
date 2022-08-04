import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-tag";

export const zoraRequest = async (gqlQuery: DocumentNode) => {
  const query = gql`
    ${gqlQuery}
  `;

  const client = new GraphQLClient("https://api.zora.co/graphql");

  return await client.request(query);
};
