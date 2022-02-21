import React from 'react'
import { Row, Col} from 'react-bootstrap'

import BoxLogin from '../../components/BoxLogin'
import FormLogin from '../../components/FormLogin'

function Login() {

  return (
      <Row>
        <Col lg={4} md={5} xs={12}>
          <BoxLogin
            title='Portal do Franqueado.'
            subtitle='Gerencie sua franquia de forma fácil e rápida.'
          >
            <FormLogin/>
          </BoxLogin>
        </Col>
        <Col lg={8} md={7} className='bg__login'></Col>
      </Row>
  )
}

export default Login