export interface AddNewTransaction {
  transactionType: 'deposit' | 'transfer' | 'none'
  transactionValue: number | null
  date: string
  month: string
}
