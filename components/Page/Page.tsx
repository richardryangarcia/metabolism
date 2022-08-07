import { Container } from "components/Container/Container";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import Head from "next/head";

type PageProps = WrapperProps & {
  tracks: string[];
  savePlaylist: () => void;
  title: string;
  trackNames: NameMap;
};

export const Page = ({
  children,
  tracks,
  savePlaylist,
  title,
  trackNames,
}: PageProps) => {
  return (
    <div>
      <Head>
        <title>metabolism</title>
        <meta name="description" content="metabolism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        tracks={tracks}
        savePlaylist={savePlaylist}
        title={title}
        trackNames={trackNames}
      />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
