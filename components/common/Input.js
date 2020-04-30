import styled, { css } from 'styled-components'

const InputWrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.vertical ? 'left' : 'center')};
  /* margin: 15px 15px 0px 0px; */
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  label {
    color: gray;
    padding-right: 5px;
    font-size: ${(props) => (props.large ? '1.25rem' : '1rem')};
    text-align: left;
  }

  input {
    background-color: #fff;
    border: 1px solid #ddd;
    width: 100%;
    height: ${(props) => (props.large ? '2rem' : '1rem')};
    border-radius: 4px;

    ${(props) =>
      props.disabled &&
      css`
        background-color: gray;
        border-color: black;
        opacity: 0.2;
        pointer-events: none;
      `}
  }
`

const Input = (props) => (
  <InputWrapper {...props}>
    <label>{props.children}</label>
    <input type="text"></input>
  </InputWrapper>
)

export default Input
