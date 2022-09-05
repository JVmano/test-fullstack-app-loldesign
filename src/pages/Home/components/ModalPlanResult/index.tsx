import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../../../../Components/Button'
import { ModalPlanDTO } from '../../types/HomePageTypesProvider'

import {
  ModalContainer,
  ModalBox,
  ModalBoxBack,
  ModalCloseButtonBox,
  ModalFormContainer,
  ModalFormContent
} from './style'

export default function ModalPlanResult (data: ModalPlanDTO): JSX.Element {
  const handleActiveModal = () => {
    data.callbackStatus(false)
    data.callbackModal()
  }

  return (
    <ModalContainer active={data.status}>
      <ModalBox>
        <ModalBoxBack>
          <ModalCloseButtonBox onClick={handleActiveModal}>
            <button>
              <GrFormClose />
            </button>
          </ModalCloseButtonBox>
          <div>
            <ModalFormContainer>
              <ModalFormContent>
                <h3>Without FaleMais Price:</h3>
                <h2>{data.noPlanValue}</h2>

                <h3>With FaleMais Price:</h3>
                <h2>
                  <span>
                    {data.planValue === '$0.00' ? 'FREE' : data.planValue}
                  </span>
                </h2>
              </ModalFormContent>
              <Button
                name='OK'
                type={'button'}
                onClick={() => handleActiveModal()}
              />
            </ModalFormContainer>
          </div>
        </ModalBoxBack>
      </ModalBox>
    </ModalContainer>
  )
}
