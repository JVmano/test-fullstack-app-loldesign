export interface GlobalInputPropsDTO {
  name: string
  type: 'email' | 'password' | 'text' | 'number' | undefined
  maxLength?: number
  placeholder?: string
  onChange: any
  value: string
}
