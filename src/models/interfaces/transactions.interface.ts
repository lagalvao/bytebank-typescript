export interface TransactionsInterface {
  transactionType: 'deposit' | 'transfer' | 'none'
  transactionValue: number | null
}
