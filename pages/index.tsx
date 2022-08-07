import { getTokensMainnet } from "gql";
import type { NextPage } from "next";
import { Grid } from "components/Grid/Grid";
import { Page } from "components/Page/Page";
import { useActivePlaylist } from "hooks/useActivePlaylist";

const Home: NextPage<{ tokens: Token[] }> = ({ tokens }) => {
  const {
    tracks,
    setTracks,
    savePlaylist,
    title,
    setTitle,
    trackNames,
    setTrackNames,
  } = useActivePlaylist();

  const updateList = (track: string, name: string) => {
    let list = [...tracks];
    let names = { ...trackNames };

    const index = list.indexOf(track);
    if (index === -1) {
      list.push(track.toLowerCase());
      names[track.toLowerCase()] = name;
    } else {
      list.splice(index, 1);
      names[track.toLowerCase()] = "";
    }

    setTracks(Array.from(new Set(list)));
    setTrackNames(names);
  };

  return (
    <Page
      tracks={tracks}
      savePlaylist={savePlaylist}
      title={title}
      trackNames={trackNames}
      setTitle={setTitle}
    >
      {/* <button onClick={handleRequest}>get zora</button> */}
      <Grid tokens={tokens} tracks={tracks} updateList={updateList} />
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
