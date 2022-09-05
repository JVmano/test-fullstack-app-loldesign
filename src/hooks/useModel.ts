import { useRef } from 'react'

export const useModelName = () => {
  const modal = useRef<string | null>(null)

  const clearModal = () => {
    modal.current = ' '
  }

  const setModal = (name: string | null) => {
    modal.current = name
  }

  return { clearModal, setModal, modal }
}
