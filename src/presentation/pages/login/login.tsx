import React from 'react'
import styled from 'styled-components'
import { Container as StyleWrapper } from './styles'

const Container = styled.div`
  background-color: red;
`

const Login: React.FC = () => {
  return (
    <StyleWrapper>
      <Container>
        <p>Hello World</p>
      </Container>
    </StyleWrapper>
  )
}

export default Login
