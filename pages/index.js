import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/common/Layout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>BRIDGE</title>
      </Head>
      <Title>HOME</Title>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();

  console.log(`init INDEX`)

  return {
    // shows: data.map(entry => entry.show)
    aa: 1,
  }
}

export default Index
