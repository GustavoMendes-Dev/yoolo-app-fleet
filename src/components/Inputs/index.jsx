import React, { useEffect, useRef } from 'react'
import { FormControl } from 'react-bootstrap';
import { useField } from '@unform/core';

export const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <React.Fragment>
        <FormControl
            ref={inputRef}
            defaultValue={defaultValue}
            className={error && "form-control is-invalid"}
            {...rest}
            onFocus={clearError}
        />

        {error && <span class="text-danger">{error}</span>}

    </React.Fragment>


  )
    
}

export const TextArea = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <React.Fragment>
      <textarea
        className={error ? "form-control is-invalid" : "form-control"}
        name={name}
        rows={5}
        onFocus={clearError}
        ref={inputRef}
        {...rest}
      />

      {error && <span class="text-danger">{error}</span>}
    </React.Fragment>
  );
};