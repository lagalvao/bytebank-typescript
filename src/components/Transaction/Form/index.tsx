import { AddNewTransaction } from '@/models/interfaces/add-new-transaction.interface'
import { TransactionsInterface } from '@/models/interfaces/transactions.interface'
import { ChangeEvent, FormEvent, useState } from 'react'
interface FormProps {
  carryOutTransaction: (values: AddNewTransaction) => void
}

export default function Form({ carryOutTransaction }: FormProps) {
  const [fieldValue, setFieldValue] = useState<TransactionsInterface>({
    transactionType: 'none',
    transactionValue: null,
  })

  function handleChange(e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) {
    const { name, value } = e.target

    const updatedValues = { ...fieldValue, [name]: value }

    setFieldValue(updatedValues)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const transactionDate = new Date().toLocaleDateString('pt-br')
    const monthTransaction = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    })

    carryOutTransaction({
      ...fieldValue,
      date: transactionDate,
      month: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
    })

    setFieldValue({ ...fieldValue, transactionValue: null })
  }

  return (
    <form
      className="flex flex-col justify-around w-3/4 h-full pt-4 z-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold text-slade-900 mb-4">Nova Transação</h3>
      <select
        className="rounded-md p-2 border-solid border-green-700 text-sm outline-none"
        onChange={(e) => handleChange(e)}
        name="transactionType"
        data-testid="select-options"
      >
        <option value="none">Selecione um tipo de transação</option>
        <option value="deposit">Depósito</option>
        <option value="transfer">Transferência</option>
      </select>
      <label htmlFor="transactionValue" className="px-0 py-4 font-bold">
        Valor
      </label>
      <input
        onChange={(e) => handleChange(e)}
        className="rounded-md p-2 border-solid border-green-300 text-sm outline-none text-center w-[70%] mb-4"
        type="number"
        value={fieldValue.transactionValue?.toString()}
        name="transactionValue"
        id="transactionValue"
        placeholder="Digite um valor"
      />
      <button
        className="bg-green-700 text-slate-100 border-none px-0 py-3 w-[70%] rounded-md text-sm font-bold cursor-pointer ease-in hover:bg-green-800"
        type="submit"
      >
        Realizar transação
      </button>
    </form>
  )
}
