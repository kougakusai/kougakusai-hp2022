import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/kougakusai-logo.svg" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="茨城大学の工学部による学園祭、こうがく祭の2022年度版公式ホームページです。今年は11月5日にオンラインで開催されます。こうがく祭についての情報を発信していきます。"
        />
      </Head>
      <body className="bg-[#f0eeee]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
