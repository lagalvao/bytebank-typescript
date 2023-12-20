import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'

interface TransactionsProps {
  transaction: AddNewTransaction
}

export default function Transactions({ transaction }: TransactionsProps) {
  const { date, month, transactionType, transactionValue } = transaction

  return (
    <li>
      <p className="text-xs font-semibold mt-3 mb-1 text-green-700">{month}</p>
      <div className="text-center flex justify-between w-full mx-o my-2">
        <p className="text-black text-sm" data-testid="transactionType">
          {transactionType === 'deposit' ? 'Depósito' : 'Transferência'}
        </p>
        <span className="text-gray-500 text-xs">{date}</span>
      </div>
      {transactionType === 'transfer' ? (
        <h3
          data-testid="transactionValue"
          className="text-xs font-bold text-black"
        >{`- R$ ${transactionValue}`}</h3>
      ) : (
        <h3
          data-testid="transactionValue"
          className="text-xs font-bold text-black"
        >{` R$ ${transactionValue}`}</h3>
      )}
      <div className="w-full h-[1px] bg-green-700 mx-auto my-3" />
    </li>
  )
}
