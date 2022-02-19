import React from 'react'
import { Row, Col} from 'react-bootstrap'

import BoxLogin from '../../components/BoxLogin'
import FormResetPassword from '../../components/FormResetPassword'

function ResetPassword() {

  return (
      <Row>
        <Col lg={4} md={5} xs={12}>
          <BoxLogin
            title='Redefinir senha.'
            subtitle='Com problemas para acessar sua conta? Preencha o campo abaixo com seu e-mail.'
          >
            <FormResetPassword/>
          </BoxLogin>
        </Col>
        <Col lg={8} md={7} className='bg__login'></Col>
      </Row>
  )
}

export default ResetPassword