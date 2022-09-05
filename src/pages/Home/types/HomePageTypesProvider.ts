import { Dispatch, SetStateAction } from 'react'

export interface ModalPlanDTO {
  status: boolean
  callbackStatus: Dispatch<SetStateAction<boolean>>
  callbackModal: () => void
  planValue: string
  noPlanValue: string
}

export interface ModalProps {
  active: boolean
}
