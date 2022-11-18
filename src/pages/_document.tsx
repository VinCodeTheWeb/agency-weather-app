import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,200,400,500,600,700,800&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
