import { getDefaultClient } from "connectkit";
import { chain, createClient } from "wagmi";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const chains = [chain.mainnet, chain.goerli, chain.rinkeby];

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains,
  })
);

export default client;
