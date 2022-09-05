import React from 'react'
import { Container } from './style'
import { GlobalInputPropsDTO } from './types/InputTypesProvider'

export default function Input (data: GlobalInputPropsDTO): JSX.Element {
  return (
    <Container>
      <input
        name={data.name}
        type={data.type}
        maxLength={data.maxLength}
        placeholder={data.placeholder}
        onChange={data.onChange}
        value={data.value}
      />
    </Container>
  )
}
