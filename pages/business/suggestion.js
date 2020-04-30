import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/common/Layout'
import Contents from '../../components/suggestion/Contents'

const PageContainer = styled.div`
  display: flex;
  font-size: 1rem;
  /* color: ${({ theme }) => theme.colors.primary}; */
  /* height:600px; */
`

const Suggestion = () => {
  return (
    <Layout>
      <Head>
        <title>提案</title>
      </Head>
      <Contents />
    </Layout>
  )
}

export default Suggestion
