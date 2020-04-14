import React from 'react'
import styled from 'styled-components'
import withLayout from '../components/MyLayout'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Index = () => {
  return (
    <>
      <Title>HOME</Title>
    </>
  )
}

export default withLayout(Index)
