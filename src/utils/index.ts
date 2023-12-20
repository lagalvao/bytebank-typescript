import { TransactionsInterface } from '@/models/interfaces/transactions.interface'

export const calculateNewBalance = (
  values: TransactionsInterface,
  balance: number,
) => {
  if (values.transactionType === 'deposit') {
    return balance + Number(values.transactionValue)
  } else {
    return balance - Number(values.transactionValue)
  }
}
