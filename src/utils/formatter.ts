export class Formatter {
  currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
