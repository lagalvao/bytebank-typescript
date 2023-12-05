import { render } from '@testing-library/react'
import Extract from '.'
import { Transaction } from './Transactions'

describe('Extract', () => {
  it('should render a list of transactions', () => {
    const transactions: Transaction[] = [
      {
        type: 'deposit',
        month: 'Janeiro',
        data: '11/05/2023',
        value: 100,
      },
    ]

    render(<Extract transactions={transactions} />)

    expect(transactions[0]).toEqual({
      type: 'deposit',
      month: 'Janeiro',
      data: '11/05/2023',
      value: 100,
    })
  })
})
