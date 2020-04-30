import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 0;
`
const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

export default Title
