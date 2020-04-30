import styled from 'styled-components'

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: ${(props) => (props.large ? '1.25rem' : '1rem')};

  /* margin-top: 1em; */
  padding: 0.25rem 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`

export default (props) => <StyledButton {...props} />
