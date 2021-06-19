import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
   background: #fff;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #030303;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #333;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #444;
  }

`;

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
        <link
          href="http://fonts.cdnfonts.com/css/operator-mono"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <div
        className="pt-20"
        style={{
          maxWidth: "100vw",
          width: "100vw",
        }}
      >
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
