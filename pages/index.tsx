import { zoraRequest } from "gql";
import type { NextPage } from "next";
import { Grid } from "components/Grid/Grid";
import { Page } from "components/Page/Page";
import { fetchPlaylistById } from "@spinamp/spinamp-sdk";

const Home: NextPage = () => {
  const handleRequest = async () => {
    const res = await fetchPlaylistById("UoFe4htiw5PXkA9SuMD7");
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
