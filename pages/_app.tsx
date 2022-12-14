import "../styles/globals.css";
import type { AppProps } from "next/app";
import client from "configs/connectkit";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        mode="light"
        customTheme={{
          "--ck-border-radius": "4px",
        }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
