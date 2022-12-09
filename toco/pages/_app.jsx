import Layout from "../src/components/Layout";
import "../styles/globals.css";

import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
}

export default MyApp;
