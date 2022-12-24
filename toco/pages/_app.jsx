import Layout from "../src/components/Layout";
import "../styles/globals.css";

import {
  WagmiConfig,
  createClient,
  configureChains,
  mainnet,
  goerli,
} from "wagmi";
import { getDefaultProvider } from "ethers";
import { publicProvider } from "wagmi/providers/public";
import { RecoilRoot } from "recoil";

const { provider } = configureChains([goerli], [publicProvider()]);
const client = createClient({
  autoConnect: true,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <WagmiConfig client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default MyApp;
