import '../styles/global.css';
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>| Me |</title>
        <link rel="shortcut icon" href="https://cdn.discordapp.com/avatars/676156871345700927/5a13c5ea7eb946886ba4725e60636707.webp?size=56" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"

        />
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="0d7e617b-9a0b-4564-ac0c-7f7ae6f3dbb4"></script>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put youyouryouyourrr mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
youyourr