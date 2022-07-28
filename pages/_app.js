import Layout from "../components/Layout";
import "../styles/globals.css";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode="light"></ColorModeScript> */}
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
