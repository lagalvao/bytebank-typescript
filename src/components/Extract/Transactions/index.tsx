export interface Transaction {
  month: string
  data: string
  value: number
  transaction: 'deposit' | 'transfer' | 'none'
}

interface TransactionsProps {
  transaction: Transaction
}

export default function Transactions({ transaction }: TransactionsProps) {
  const { data, month, transaction: type, value } = transaction

  return (
    <li>
      <p className="text-xs font-semibold mt-3 mb-1 text-green-700">{month}</p>
      <div className="text-center flex justify-between w-full mx-o my-2">
        <p className="text-black text-sm" data-testid="transactionType">
          {type === 'deposit' ? 'Depósito' : 'Transferência'}
        </p>
        <span className="text-gray-500 text-xs">{data}</span>
      </div>
      {type === 'transfer' ? (
        <h3
          data-testid="transactionValue"
          className="text-xs font-bold text-black"
        >{`- R$ ${value}`}</h3>
      ) : (
        <h3
          data-testid="transactionValue"
          className="text-xs font-bold text-black"
        >{` R$ ${value}`}</h3>
      )}
      <div className="w-full h-[1px] bg-green-700 mx-auto my-3" />
    </li>
  )
}
