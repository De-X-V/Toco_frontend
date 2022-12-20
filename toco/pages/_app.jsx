import Layout from "../src/components/Layout";
import "../styles/globals.css";

import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { RecoilRoot } from "recoil";
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
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
