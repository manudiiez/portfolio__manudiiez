import React from 'react'
import styled from 'styled-components'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Header from '../sections/Header'

const Index = () => {
  return (
    <Container>
      <Header/>
      <About/>
      <Contact/>
    </Container>
  )
}

export default Index

const Container = styled.div`
  

`