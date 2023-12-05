export interface Transaction {
  month: string
  data: string
  value: number
  type: 'deposit' | 'transfer' | 'none'
}

interface TransactionsProps {
  transaction: Transaction
}

export default function Transactions({ transaction }: TransactionsProps) {
  return (
    <li>
      <p className="text-xs font-semibold mt-3 mb-1 text-green-700">
        {transaction.month}
      </p>
      <div className="text-center flex justify-between w-full mx-o my-2">
        <p className="text-black text-sm" data-testid="transactionType">
          {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
        </p>
        <span className="text-gray-500 text-xs">{transaction.data}</span>
      </div>
      {transaction.type === 'transfer' ? (
        <h3
          data-testid="transactionValue"
          className="text-base font-bold text-black"
        >{`- R$ ${transaction.value}`}</h3>
      ) : (
        <h3
          data-testid="transactionValue"
          className="text-xs font-bold text-black"
        >{` R$ ${transaction.value}`}</h3>
      )}
      <div className="w-full h-[1px] bg-green-700 mx-auto my-3" />
    </li>
  )
}
