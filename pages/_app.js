import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Particles from "react-particles-js";
import { motion, AnimatePresence } from "framer-motion";

const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  width: 100%;
  z-index: -11;
  background: #030303;

  #tsparticles {
    width: 100%;
    min-height: 100vh;

    canvas {
      min-height: 100vh;
      width: 100%;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
   background: rgba(0, 0, 0, 0.7);
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600;700&family=Raleway:wght@200;300;400;500;600;900&display=swap"
        />
      </Head>

      <GlobalStyle />
      <ParticlesContainer>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 20,
                  size_min: 0.1,
                  sync: false,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
            },
          }}
        />
      </ParticlesContainer>

      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
