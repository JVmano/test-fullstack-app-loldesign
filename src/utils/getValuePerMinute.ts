import { getValuePerMinuteDTO } from './types/DataTypesProvider'

export class ValuesPerMinute {
  getValuePerMinute (
    data: getValuePerMinuteDTO
  ): number | undefined {
    const originCity = data.originCity
    const destinationCity = data.destinationCity

    switch (true) {
      case originCity === '011' && destinationCity === '016':
        return 1.9
      case originCity === '016' && destinationCity === '011':
        return 2.9
      case originCity === '011' && destinationCity === '017':
        return 1.7
      case originCity === '017' && destinationCity === '011':
        return 2.7
      case originCity === '011' && destinationCity === '018':
        return 0.9
      case originCity === '018' && destinationCity === '011':
        return 1.9
      default:
        return undefined
    }
  }
}
