import { Formatter } from './formatter'
import { calculatePlanDTO } from './types/DataTypesProvider'

export class CalculatePlan {
  calculatePlan (data: calculatePlanDTO) {
    // multiply value per city and call duration
    const noPlanCallValue = data.pricePerMinute * Number(data.callTime)

    // apply plan discount in total spent
    const baseValueWithPlan =
      data.pricePerMinute * (Number(data.callTime) - Number(data.plan))

    // if the total minutes exceeded the plan's maximum discount apply 10% penality
    // otherwise only left the remainder of value
    const withPlanValue =
      baseValueWithPlan > 0 ? baseValueWithPlan + baseValueWithPlan * 0.1 : 0

    // format the numbers to currency
    const formattedNoPlanCallValue = new Formatter().currency.format(noPlanCallValue)
    const formattedWithPlanValue = new Formatter().currency.format(withPlanValue)

    return {
      noPlanValue: formattedNoPlanCallValue,
      planValue: formattedWithPlanValue
    }
  }
}
