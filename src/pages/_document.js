import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    {/* Donde se contendran el contenido de la aplicacion */}
                    <Main />
                    {/* Aqui se ubicaran todos los scripts generados en la aplicacion */}
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
