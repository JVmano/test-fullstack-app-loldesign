export interface calculatePlanDTO {
  pricePerMinute: number
  callTime: string
  plan: string
}

export interface getValuePerMinuteDTO {
  originCity: string
  destinationCity: string
}
