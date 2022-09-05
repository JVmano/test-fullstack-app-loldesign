import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { useModelName } from '../../hooks/useModel'
import { DefaultValuesProvider } from '../../providers/defaultValuesProvider'
import { CalculatePlan } from '../../utils/calculatePlan'
import { ValuesPerMinute } from '../../utils/getValuePerMinute'
import ModalPlanResult from './components/ModalPlanResult'
import { ButtonsGroup, Container, Select } from './style'

export default function Home (): JSX.Element {
  const [status, setStatus] = useState(false)
  const { clearModal, setModal, modal } = useModelName()

  const [cityCodes, setCityCodes] = useState<{ id: string; slug: string; }[]>([])
  const [callPlans, setCallPlans] = useState<{ id: string; slug: string; }[]>([])

  const [originCity, setOriginCity] = useState('')
  const [destinationCity, setDestinationCity] = useState('')
  const [callTime, setCallTime] = useState('')
  const [plan, setPlan] = useState('')

  const [planValue, setPlanValue] = useState('')
  const [noPlanValue, setNoPlanValue] = useState('')

  const handleActiveModal = (modal: string | null) => {
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

      const pricePerMinute = new ValuesPerMinute().getValuePerMinute({ originCity, destinationCity })
      if (!pricePerMinute) return toast.error('Inexistent Plan')

      const { noPlanValue, planValue } = new CalculatePlan().calculatePlan({
        pricePerMinute,
        callTime,
        plan
      })

      setNoPlanValue(noPlanValue)
      setPlanValue(planValue)

      handleActiveModal('PlanResult')
    } catch (error) {
      console.error(error)
      return toast.error('Unexpected error')
    }
  }

  useEffect(() => {
    const tempCityCodes = new DefaultValuesProvider().cityCodes
    const tempCallPlans = new DefaultValuesProvider().callPlans

    setCityCodes(tempCityCodes)
    setCallPlans(tempCallPlans)
  }, [])

  return (
    <>
      <Container>
        <h2>Telzir</h2>
        <h1>
          Fale<span>Mais</span>
        </h1>
        <Select
          name='originCity'
          value={originCity}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setOriginCity(e.target.value)
          }
        >
          <option value={''} defaultValue={'string'} disabled hidden>
            Origin City
          </option>
          {cityCodes.map((city) => {
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
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setDestinationCity(e.target.value)
          }
        >
          <option value={''} defaultValue={'string'} disabled hidden>
            Destination City
          </option>
          {cityCodes.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.slug}
              </option>
            )
          })}
        </Select>
        <Input
          name='callTime'
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setCallTime(e.target.value)
          }
          value={callTime}
          placeholder={'Call Time in Minutes'}
          type={'number'}
        />
        <Select
          name='plan'
          value={plan}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setPlan(e.target.value)
          }
        >
          <option value={''} defaultValue={'string'} disabled hidden>
            FaleMais Plan
          </option>
          {callPlans.map((plan) => {
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
