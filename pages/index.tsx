import { zoraRequest } from "gql";
import type { NextPage } from "next";
import search from "gql/queries/search.gql";
import { Grid } from "components/Grid/Grid";
import { Page } from "components/Page/Page";

const Home: NextPage = () => {
  const handleRequest = async () => {
    const res = await zoraRequest(search);
    console.log(res);
  };

  return (
    <Page>
      <button onClick={handleRequest}>get zora</button>
      <Grid />
    </Page>
  );
};

export default Home;
