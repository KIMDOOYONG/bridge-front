import { Fragment } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const SelectWrapper = styled.div`
  label {
    color: gray;
    font-size: ${(props) => (props.large ? '1.25rem' : '1rem')};
    text-align: left;
  }
`

export default (props) => {
  return (
    <SelectWrapper {...props}>
      <label>{props.children}</label>
      <Select options={props.options} />
    </SelectWrapper>
  )
}
