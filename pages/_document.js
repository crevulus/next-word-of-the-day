// overall structure; JS in this file never executed on client side

import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
  mediaNetAd = () => {
    try {
      window._mNHandle.queue.push(function () {
        window._mNDetails.loadTag("458990043", "728x90", "458990043");
      });
    } catch (error) {}
  };

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Your free & open Culture Dictionary for English learners. Want to know how a word is really used in modern, contemporary English? Search now!"
          />
          <script type="text/javascript">
            window._mNHandle = window._mNHandle || {}; window._mNHandle.queue =
            window._mNHandle.queue || []; medianet_versionId = "3121199";
          </script>
          <script
            src="https://contextual.media.net/dmedianet.js?cid=8CUH26FJK"
            async
          ></script>
          <meta
            name="ahrefs-site-verification"
            content="3498fcbf1b50bbad07a7277a213ad006c6afb000bebb38839d620e8a2405e060"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="458990043">{this.mediaNetAd}</div>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
