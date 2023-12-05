import { render, screen } from '@testing-library/react'
import Transactions, { Transaction } from '.'

describe('Transactions', () => {
  it('should render the same component with updated props', () => {
    const transaction: Transaction = {
      type: 'deposit',
      month: 'Janeiro',
      data: '11/05/2023',
      value: 100,
    }

    const { rerender } = render(<Transactions transaction={transaction} />)

    const transactionType = screen.getByTestId('transactionType')
    const transactionValue = screen.getByTestId('transactionValue')

    expect(transactionType).toHaveTextContent('Depósito')
    expect(transactionValue).toHaveTextContent('R$ 100')

    const newTransaction: Transaction = {
      type: 'transfer',
      month: 'Janeiro',
      data: '11/05/2023',
      value: 100,
    }

    rerender(<Transactions transaction={newTransaction} />)

    const newTransactionType = screen.getByTestId('transactionType')
    const newTransactionValue = screen.getByTestId('transactionValue')

    expect(newTransactionType).toHaveTextContent('Transferência')
    expect(newTransactionValue).toHaveTextContent('- R$ 100')
  })
})
