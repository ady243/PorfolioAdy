import { Html, Head, Main, NextScript } from "next/document";
// import "./document.css";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gradient-to-r dark:from-autres dark:to-tokos dark:text-white backcolor">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//  from-yellow-500 to-red-500
