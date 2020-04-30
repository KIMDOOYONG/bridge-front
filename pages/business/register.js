import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/common/Layout'

const PageContainer = styled.div`
  display: flex;
  font-size: 1rem;
  /* color: ${({ theme }) => theme.colors.primary}; */
  /* height:600px; */
`

const Register = () => {
  return (
    <Layout>
      <PageContainer>
        <Head>
          <title>取引先登録</title>
        </Head>
        <div>取引先登録</div>
      </PageContainer>
    </Layout>
  )
}

export default Register
