import React from "react"
import { Row, Col } from "react-bootstrap"

import Aside from '../../components/Aside'

export default function Main({children}) {

  return (
    <Row>
      <Col lg={2}>
        <Aside/>
      </Col>
      <Col>
        {children}
      </Col>
    </Row>
  )
}