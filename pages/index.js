import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Banner from 'sections/banner'
import Feature from 'sections/feature'
import BusinessProfit from 'sections/business-profit'
import Knowledge from 'sections/knowledge'
import WorkFlow from 'sections/workflow'
import Support from 'sections/support'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          description="北海道大学機械学習サークルへようこそ。機械学習を自分の武器にして、様々なことにチャレンジしましょう～！"
          title="北海道大学機械学習サークル（HMLC）HP"
        />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <WorkFlow />
        <Support />
      </Layout>
    </ThemeProvider>
  )
}
