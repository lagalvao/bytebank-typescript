import { TransactionsInterface } from '@/models/interfaces/transactions.interface'
import { calculateNewBalance } from '.'

describe('Utils', () => {
  it('shuold return the balance value updated with the income', () => {
    const calculateYield = jest.fn((balance) => balance + balance * 0.005)

    const balance = 100

    const newValue = calculateYield(balance)

    expect(newValue).toBe(100.5)
    expect(calculateYield).toHaveBeenCalledWith(balance)
  })

  it('when I carry out a transaction that is of the deposit type, the balance must increase', () => {
    const transaction: TransactionsInterface = {
      transactionType: 'deposit',
      transactionValue: 50,
    }

    const newValue = calculateNewBalance(transaction, 100)

    expect(newValue).toBe(150)
  })

  it('when I carry out a transaction that is of the transfer type, the balance must decrease', () => {
    const transaction: TransactionsInterface = {
      transactionType: 'transfer',
      transactionValue: 50,
    }

    const newValue = calculateNewBalance(transaction, 100)

    expect(newValue).toBe(50)
  })
})
