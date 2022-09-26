import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="茨城大学の工学部による学園祭、こうがく祭の2022年度版公式ホームページです。今年は11月5日に開催されます。こうがく祭についての情報を発信していきます。"
        />
        <meta
          property="og:url"
          content="http://kougakusai.eng.ibaraki.ac.jp/"
        />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="2022年度こうがく祭公式HP" />
        <meta
          property="og:description"
          content="茨城大学の工学部による学園祭、こうがく祭の2022年度版公式ホームページです。今年は11月5日に開催されます。"
        />
        <meta
          property="og:site_name"
          content="2022年度こうがく祭公式HP | 茨城大学"
        />
        <meta
          property="og:image"
          content="http://kougakusai.eng.ibaraki.ac.jp/og.png"
        />
      </Head>

      <body className="scroll-smooth bg-[#f0eeee]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
