import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import * as gtag from 'lib/gtag'
import 'fontsource-dm-sans'
import 'fontsource-bree-serif'
import 'fontsource-roboto-slab'
import 'rc-drawer/assets/index.css'

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])
  return (
    <ThemeProvider theme={theme}>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}