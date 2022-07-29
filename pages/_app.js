// import Layout from "../components/Layout";
import "../styles/globals.css";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout"));

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>20+ Google Data Studio Report</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <ColorModeScript initialColorMode="light"></ColorModeScript> */}
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
