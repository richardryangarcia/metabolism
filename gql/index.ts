import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-tag";
import GetTokensMainnet from "./queries/getTokensMainnet.gql";
import GetTokenMainnet from "./queries/getTokenMainnet.gql";

export const zoraRequest = async (gqlQuery: DocumentNode) => {
  const query = gql`
    ${gqlQuery}
  `;

  const client = new GraphQLClient("https://api.zora.co/graphql");

  return await client.request(query);
};

export const zoraRequestWithVars = async (
  gqlQuery: DocumentNode,
  vars: any = {}
) => {
  const query = gql`
    ${gqlQuery}
  `;

  const client = new GraphQLClient("https://api.zora.co/graphql");

  return await client.request(query, vars);
};

export const getTokensMainnet = async () => {
  return await zoraRequest(GetTokensMainnet);
};

export const getToken = async (address: string, id: string) => {
  return await zoraRequestWithVars(GetTokenMainnet, { address, id });
};
