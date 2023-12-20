import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'
import Transactions from './Transactions'

interface ExtractProps {
  transactions: AddNewTransaction[]
}

export default function Extract({ transactions }: ExtractProps) {
  return (
    <section className="bg-slate-100 rounded-lg p-6 w-[282px] overflow-auto">
      <h2 className="text-xl font-extrabold text-slate-900 mb-6">Extrato</h2>
      <ul className="list-none">
        {transactions.map((transaction, index) => {
          return <Transactions key={index} transaction={transaction} />
        })}
      </ul>
    </section>
  )
}
