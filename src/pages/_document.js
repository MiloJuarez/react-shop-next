import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-SHEVQMVFQ7"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-SHEVQMVFQ7');`,
                        }}
                    />
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
