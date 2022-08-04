import { Container } from "components/Container/Container";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import Head from "next/head";

export const Page = ({ children }: WrapperProps) => {
  return (
    <div>
      <Head>
        <title>metabolism</title>
        <meta name="description" content="metabolism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
