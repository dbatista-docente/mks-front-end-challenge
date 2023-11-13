import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>MKS Sistemas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Teste técnico MKS Sistemas" />
        <meta property="og:description" content="Teste técnico de Dener Batista para Front-End Developer" />
        <meta property="og:url" content="https://mks-front-end-challenge-six.vercel.app/" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/947324026236330018/1173467670629339146/Diseno_sin_titulo-removebg-preview.png?ex=65640fee&is=65519aee&hm=39f5534a8632d97f360bf883e1e5968db1dde53980374b28512b6065333df992&" />
        <meta property="og:image:type" content="image/png" />
        <link rel="icon" href="./favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
