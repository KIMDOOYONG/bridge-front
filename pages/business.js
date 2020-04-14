import React from 'react'
import styled from 'styled-components'
import withLayout from '../components/MyLayout'
import Skill from '../components/skill'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Business = () => {
  return (
    <>
      <Title>営業管理</Title>
      <Skill />
    </>
  )
}

export default withLayout(Business)
