import Document, { Html, Head, Main, NextScript } from "next/document";

// this will be injected to all the pages
// this is only rendered on the server (created on the server)
// no state, javascript, etc will not run here
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
