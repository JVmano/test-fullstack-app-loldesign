import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { useModelName } from '../../hooks/useModel'
import { callPlansProvider, cityCodesProvider } from '../../providers/defaultValuesProvider'
import { calculatePlan } from '../../utils/calculatePlan'
import { getValuePerMinute } from '../../utils/getValuePerMinute'
import ModalPlanResult from './components/ModalPlanResult'
import { ButtonsGroup, Container, Select } from './style'

export default function Home (): JSX.Element {
  const [status, setStatus] = useState(false)
  const { clearModal, setModal, modal } = useModelName()

  const [originCity, setOriginCity] = useState('')
  const [destinationCity, setDestinationCity] = useState('')
  const [callTime, setCallTime] = useState('')
  const [plan, setPlan] = useState('')

  const [planValue, setPlanValue] = useState('')
  const [noPlanValue, setNoPlanValue] = useState('')

  const handleActiveModal = (modal: string | undefined) => {
    setModal(modal)
    setStatus(true)
  }

  const OpenModals = () => {
    return (
      <>
        {modal.current === 'PlanResult' && (
          <ModalPlanResult
            planValue={planValue}
            noPlanValue={noPlanValue}
            status={status}
            callbackStatus={setStatus}
            callbackModal={clearModal}
          />
        )}
      </>
    )
  }

  const submitPlanResult = () => {
    try {
      if (!originCity) return toast.error('Origin City missing')
      if (!destinationCity) return toast.error('Destination City missing')
      if (!callTime) return toast.error('Call Duration missing')
      if (!plan) return toast.error('Plan missing')

      const pricePerMinute = getValuePerMinute({ originCity, destinationCity })
      if (!pricePerMinute) return toast.error('Inexistent Plan')

      const { noPlanValue, planValue } = calculatePlan({ pricePerMinute, callTime, plan })

      setNoPlanValue(noPlanValue)
      setPlanValue(planValue)

      handleActiveModal('PlanResult')
    } catch (error) {
      console.error(error)
      return toast.error('Unexpected error')
    }
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
          <option value={''} defaultValue={'string'} disabled hidden>
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
          <option value={''} defaultValue={'string'} disabled hidden>
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
          type={'number'}
        />
        <Select
          name='plan'
          value={plan}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setPlan(e.target.value)}
        >
          <option value={''} defaultValue={'string'} disabled hidden>
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
            onClick={() => submitPlanResult()}
          />
        </ButtonsGroup>
        <OpenModals />
      </Container>
    </>
  )
}
