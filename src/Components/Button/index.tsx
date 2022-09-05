import React from 'react'
import { Container } from './style'
import { GlobalButtonDTO } from './types/ButtonTypesProvider'

export default function Button (data: GlobalButtonDTO): JSX.Element {
  return (
    <Container>
      <button type={data.type} onClick={data.onClick}>
        {data.name}
      </button>
    </Container>
  )
}
