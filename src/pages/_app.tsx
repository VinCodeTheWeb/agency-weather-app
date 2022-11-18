import type { AppProps } from 'next/app'

import '../sass/_main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
