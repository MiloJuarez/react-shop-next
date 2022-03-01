import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
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
