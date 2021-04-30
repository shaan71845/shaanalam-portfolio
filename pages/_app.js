import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Particles from "react-particles-js";

const particlesStyles = {
  position: "fixed",
  top: "0%",
  left: "0%",
  minHeight: "100vh",
  width: "100%",
  zIndex: -1,
  background: "#030303",
};

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    /* background: #030303; */
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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600;700&family=Raleway:wght@200;300;400;500;600;900&display=swap"
        />
      </Head>
      <GlobalStyle />
      <div style={particlesStyles}>
        <Particles
          style={particlesStyles}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
