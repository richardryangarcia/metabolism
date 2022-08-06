declare module "*.gql" {
  import { DocumentNode } from "graphql";

  const value: DocumentNode;
  export = value;
}

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
};

type Token = {
  address: string;
  id: string;
  tokenUri: string;
  metadata: any;
};
