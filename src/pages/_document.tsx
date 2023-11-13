import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="Teste técnico Dener Batista para Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Teste técnico MKS Sistemas"/>
        <meta property="og:url" content="https://mks-front-end-challenge-six.vercel.app/"/>
        <meta property="og:image" content="./favicon.svg"/>
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
