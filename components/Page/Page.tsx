import { Container } from "components/Container/Container";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import Head from "next/head";

type PageProps = WrapperProps & {
  tracks: string[];
  savePlaylist: () => void;
};

export const Page = ({ children, tracks, savePlaylist }: PageProps) => {
  return (
    <div>
      <Head>
        <title>metabolism</title>
        <meta name="description" content="metabolism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header tracks={tracks} savePlaylist={savePlaylist} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
