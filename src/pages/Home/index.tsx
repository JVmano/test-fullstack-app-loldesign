import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { callPlansProvider, cityCodesProvider } from '../../providers/defaultValuesProvider'
import { ButtonsGroup, Container, Select } from './style'

export default function Home (): JSX.Element {
  const [originCity, setOriginCity] = useState('')
  const [destinationCity, setDestinationCity] = useState('')
  const [callTime, setCallTime] = useState('')
  const [plan, setPlan] = useState('')

  const calculatePlan = () => {
    console.log(originCity)
    console.log(destinationCity)
    console.log(callTime)
    console.log(plan)
  }

  return (
    <>
      <Container>
        <h2>Telzir</h2>
        <h1>Fale<span>Mais</span></h1>
        <Select
          name='originCity'
          value={originCity}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setOriginCity(e.target.value)}
        >
          <option value={''} selected disabled hidden>
            Origin City
          </option>
          {cityCodesProvider.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.slug}
              </option>
            )
          })}
        </Select>
        <Select
          name='destinationCity'
          value={destinationCity}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setDestinationCity(e.target.value)}
        >
          <option value={''} selected disabled hidden>
            Destination City
          </option>
          {cityCodesProvider.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.slug}
              </option>
            )
          })}
        </Select>
        <Input
          name='callTime'
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setCallTime(e.target.value)}
          value={callTime}
          placeholder={'Call Time in Minutes'}
          type={'text'}
        />
        <Select
          name='plan'
          value={plan}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPlan(e.target.value)}
        >
          <option value={''} selected disabled hidden>
            FaleMais Plan
          </option>
          {callPlansProvider.map((plan) => {
            return (
              <option key={plan.id} value={plan.id}>
                {plan.slug}
              </option>
            )
          })}
        </Select>

        <ButtonsGroup>
          <Button
            type={'button'}
            name={'CALCULATE PLAN'}
            onClick={() => calculatePlan()}
          />
        </ButtonsGroup>
      </Container>
    </>
  )
}
