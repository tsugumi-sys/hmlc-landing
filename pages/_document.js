import { extend } from 'next-compose-plugins'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import gtag here
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    
    render() {
        return (
            <Html lang="ja">
                <Head>
                    {/* google analytics */}
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;