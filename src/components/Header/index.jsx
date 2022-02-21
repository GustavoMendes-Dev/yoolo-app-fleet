import React from "react"
import { Navbar, Container } from 'react-bootstrap'


export default function Header() {

  return (
    <Navbar variant="light" bg="light">
      <Container>
        <Navbar.Collapse className="justify-content-end">
          Gustavo Mendes
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}