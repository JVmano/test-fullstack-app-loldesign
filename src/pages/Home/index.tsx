import React from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { ButtonsGroup, Container, Select } from './style'

export default function Home () {
  return (
    <>
      <Container>
        <h2>Telzir</h2>
        <h1>Fale<span>Mais</span></h1>
        <Select
          name='name'
        >
          <option value={''} selected disabled hidden>
            Origin City
          </option>
          <option value={'011'}>
            011 - São Paulo
          </option>
          <option value={'016'}>
            016 - São Paulo
          </option>
          <option value={'017'}>
            017 - São Paulo
          </option>
          <option value={'018'}>
            018 - São Paulo
          </option>
        </Select>
        <Select
          name='name'
        >
          <option value={''} selected disabled hidden>
            Destination City
          </option>
          <option value={'011'}>
            011 - São Paulo
          </option>
          <option value={'016'}>
            016 - São Paulo
          </option>
          <option value={'017'}>
            017 - São Paulo
          </option>
          <option value={'018'}>
            018 - São Paulo
          </option>
        </Select>
        <Input
          name='name'
          onChange={''}
          value={''}
          placeholder={'Call Time in Minutes'}
          type={'text'}
        />
        <Select
          name='name'
        >
          <option value={''} selected disabled hidden>
            FaleMais Plan
          </option>
          <option value={'FaleMais 30'}>
            FaleMais 30
          </option>
          <option value={'FaleMais 60'}>
            FaleMais 60
          </option>
          <option value={'FaleMais 120'}>
            FaleMais 120
          </option>
        </Select>

        <ButtonsGroup>
          <Button
            type={'button'}
            name={'CALCULATE PLAN'}
            onClick={() => {}}
          />
        </ButtonsGroup>
      </Container>
    </>
  )
}
