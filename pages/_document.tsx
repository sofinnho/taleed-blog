import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "theme";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html dir={theme.direction} lang="ar">
        <Head>
          
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} storageKey="talleed-theme-mode" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
