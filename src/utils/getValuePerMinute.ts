import { getValuePerMinuteDTO } from './types/DataTypesProvider'

export function getValuePerMinute (data: getValuePerMinuteDTO): number | undefined {
  const originCity = data.originCity
  const destinationCity = data.destinationCity

  switch (true) {
    case originCity === '011' && destinationCity === '016':
      return 1.90
    case originCity === '016' && destinationCity === '011':
      return 2.90
    case originCity === '011' && destinationCity === '017':
      return 1.70
    case originCity === '017' && destinationCity === '011':
      return 2.70
    case originCity === '011' && destinationCity === '018':
      return 0.90
    case originCity === '018' && destinationCity === '011':
      return 1.90
    default:
      return undefined
  }
}
