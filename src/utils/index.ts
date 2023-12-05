import { TransactionsInterface } from '@/models/interfaces/transactions.interface'

export const calculateNewBalance = (
  values: TransactionsInterface,
  balance: number,
) => {
  if (values.transaction === 'deposit') {
    return balance + Number(values.value)
  } else {
    return balance - Number(values.value)
  }
}
