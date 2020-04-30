import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import withLayout from '../../components/common/Layout'
import Contents from '../../components/employees/Contents'

const PageContainer = styled.div`
  display: flex;
  font-size: 1rem;
  /* color: ${({ theme }) => theme.colors.primary}; */
  /* height:600px; */
`

const Business = () => {
  return (
    <PageContainer>
      <Head>
        <title>要員情報</title>
      </Head>
      <Contents />
    </PageContainer>
  )
}

export default withLayout(Business)
