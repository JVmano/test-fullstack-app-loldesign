import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('Verify if some elements are rendering', async () => {
  render(<App />)

  const companyName = screen.getByText('Telzir')
  const minutesInput = screen.getByPlaceholderText('Call Time in Minutes')
  const calculateButton = (await screen.findByRole('button')).innerHTML

  expect(companyName).toBeInTheDocument()
  expect(minutesInput).toBeInTheDocument()
  expect(calculateButton).toEqual('CALCULATE PLAN')
})
