import { getTokensMainnet } from "gql";
import type { NextPage } from "next";
import { Grid } from "components/Grid/Grid";
import { Page } from "components/Page/Page";

const Home: NextPage<{ tokens: Token[] }> = ({ tokens }) => {
  // const handleRequest = async () => {
  //   const res = await fetchPlaylistById("UoFe4htiw5PXkA9SuMD7");
  //   console.log(res);
  // };

  return (
    <Page>
      {/* <button onClick={handleRequest}>get zora</button> */}
      <Grid tokens={tokens} />
    </Page>
  );
};

export async function getServerSideProps(context: any) {
  const res = await getTokensMainnet();
  const tokens = res?.tokens?.nodes.map((token: any) => {
    return {
      address: token.token.collectionAddress,
      id: token.token.tokenId,
      tokenUri: token.token.tokenUrl,
      metadata: token.token.metadata,
    };
  });

  return {
    props: {
      tokens,
    },
  };
}

export default Home;
