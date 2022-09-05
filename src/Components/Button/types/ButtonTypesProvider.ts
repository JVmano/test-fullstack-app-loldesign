export interface GlobalButtonDTO {
  type: 'button' | 'submit' | 'reset' | undefined
  name: string
  onClick: () => void
}
