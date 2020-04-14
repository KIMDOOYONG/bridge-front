import Head from 'next/head'
import styled from 'styled-components'
import Header from './Header'

const Layout = styled.div`
  margin: 10px;
  padding: 10px;
`

const withLayout = (Page) => {
  return () => (
    <Layout>
      <Head>
        <title>BRIDGE</title>
      </Head>
      <Header />
      <Page />
    </Layout>
  )
}

export default withLayout
