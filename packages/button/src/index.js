import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  border: 0;
  border-radius: 2px;
  font-family: inherit;
  outline: 0;
  margin-bottom: 30px;
  width: 100%;
`

export const Button = props => <StyledButton {...props} />
