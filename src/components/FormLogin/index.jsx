import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, FormLabel, Alert } from 'react-bootstrap';
import { Form } from '@unform/web';
import * as Yup from "yup";

import Btn from '../../components/Btn';
import { Input } from '../../components/Inputs';

export default function FormLogin() {
  const [ message, setMessage ] = useState();
  const formRef = useRef(null);
  let history = useHistory();
  const [loading, setLoading] = useState(false);


  async function handleSubmit(values) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Digite um e-mail válido.")
          .required("E-mail é obrigatório."),
        password: Yup.string()
          .min(8, "Senha de mínimo de 8 caracteres.")
          .required("Senha é obrigatória."),
      });

      await schema.validate(values, {
        abortEarly: false,
      });
      
      setMessage('teste');
      history.push('/');

      formRef.current.setErrors({});
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        setLoading(false);
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  
  return (
    <Form ref={formRef} className="mt-4"  onSubmit={handleSubmit}>
      {message && <Alert className="text-center" variant="danger">{message}</Alert>}

        <FormGroup className="form-group">
          <FormLabel>E-mail</FormLabel>
          <Input
            name="email"
            type="text"
            placeholder="Digite seu e-mail"
          />
        </FormGroup>
        <FormGroup className="form-group mt-4">
          <FormLabel>Senha</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </FormGroup>

        <Link to='/forgot-password' className='link__login'>Esqueci minha senha.</Link>

        <Btn
            className='btn__login'
            title="Entrar"
            loading={loading}
            onClick={() => {setLoading(true)}}
        />
    </Form>
  )
}