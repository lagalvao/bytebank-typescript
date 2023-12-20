import { render } from '@testing-library/react'
import Extract from '.'
import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'

describe('Extract', () => {
  it('should render a list of transactions', () => {
    const transactions: AddNewTransaction[] = [
      {
        transactionType: 'deposit',
        month: 'Janeiro',
        date: '11/05/2023',
        transactionValue: 100,
      },
    ]

    render(<Extract transactions={transactions} />)

    expect(transactions[0]).toEqual({
      transactionType: 'deposit',
      month: 'Janeiro',
      date: '11/05/2023',
      transactionValue: 100,
    })
  })
})
