import { useRef } from 'react'

export const useModelName = () => {
  const modal = useRef(null)

  const clearModal = () => {
    modal.current = ' '
  }

  const setModal = (name) => {
    modal.current = name
  }

  return { clearModal, setModal, modal }
}
