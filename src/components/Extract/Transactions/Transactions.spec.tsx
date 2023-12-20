import { render, screen } from '@testing-library/react'
import Transactions from '.'
import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'

describe('Transactions', () => {
  it('should render the same component with updated props', () => {
    const transaction: AddNewTransaction = {
      transactionType: 'deposit',
      month: 'Janeiro',
      date: '11/05/2023',
      transactionValue: 100,
    }

    const { rerender } = render(<Transactions transaction={transaction} />)

    const transactionType = screen.getByTestId('transactionType')
    const transactionValue = screen.getByTestId('transactionValue')

    expect(transactionType).toHaveTextContent('Depósito')
    expect(transactionValue).toHaveTextContent('R$ 100')

    const newTransaction: AddNewTransaction = {
      transactionType: 'transfer',
      month: 'Janeiro',
      date: '11/05/2023',
      transactionValue: 100,
    }

    rerender(<Transactions transaction={newTransaction} />)

    const newTransactionType = screen.getByTestId('transactionType')
    const newTransactionValue = screen.getByTestId('transactionValue')

    expect(newTransactionType).toHaveTextContent('Transferência')
    expect(newTransactionValue).toHaveTextContent('- R$ 100')
  })
})
